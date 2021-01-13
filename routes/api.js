const express = require("express");
const apiRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Book = require("../models/Book");
const { request, response } = require("express");
const axios = require("axios");

apiRouter.get("/search/:searchTerms", (request, response) => {
    const searchTerms = request.params.searchTerms;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${process.env.API_KEY}`)
    .then(result => {
        console.log(result.data);
        response.json(result.data);
    })
    .catch(error => {
        console.log(error);
        response.status(500).json(
            {
                message: {
                    msgBody: "An error occurred",
                    msgError: true
                }
            }
        )
    });
});

apiRouter.get("/books", passport.authenticate("jwt", {session: false}), (request, response) => {
    //Find the user logged in, and populate that user's books array.
    User.findById({_id: request.user._id})
        .populate("books")
        .exec((error, document) => {
            if(error) {
                response.status(500).json(
                    {
                        message: {
                            msgBody: "An error occured", 
                            msgError: true
                        }
                    }
                );
            } else {
                //The books array will be populated using the returned document.
                response.status(200).json(
                    {
                        books: document.books, 
                        authenticated: true
                    }
                );
            }
        });
});

apiRouter.post("/books", passport.authenticate("jwt", {session: false}), (request, response) => {
    console.log(request.body);
    console.log(request.user);
    
    const book = new Book({...request.body});

    book.save(error => {
        if(error) {
            response.status(500).json(
                {
                    message: {
                        msgBody: "An error occured", 
                        msgError: true
                    }
                }
            );
        } else {
            request.user.books.push(book);
            request.user.save(error => {
                if(error) {
                    response.status(500).json(
                        {
                            message: {
                                msgBody: "An error occured", 
                                msgError: true
                            }
                        }
                    );
                } else {
                    //Confirm that the new aspiration was created and pushed to the user.
                    response.status(200).json(
                        {
                            message: {
                                msgBody: `Created new aspiration for user ${request.user.username}.`,
                                msgError: false
                            }
                        }
                    );
                }
            });
        }
    });
});

apiRouter.delete("/books/:id", passport.authenticate("jwt", {session: false}), (request, response) => {
    console.log("in delete route");
    Book.remove(
        {_id: request.params.id}
    ).then(result => {
        console.log(result);
        response.json(result);
    }).catch(error => {
        response.json(error);
        console.log(error);
    });
});

module.exports = apiRouter;