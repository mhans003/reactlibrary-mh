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


module.exports = apiRouter;