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
    })
    
});


module.exports = apiRouter;