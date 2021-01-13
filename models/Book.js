//Require Mongoose and create Schema for a book.
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const BookSchema = new Schema({
    title: {
        type: String
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    thumbnail: {
        type: String
    },
    link: {
        type: String
    },
    read: {
        type: Boolean
    },
    apiID: {
        type: String
    },
    categories: {
        type: Array
    }
})

//Create and export the Book model variable.
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;