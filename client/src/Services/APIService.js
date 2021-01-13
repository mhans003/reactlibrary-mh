import axios from "axios";

export default {
    //Search Google Books
    searchBooks: (searchTerms) => {
        return axios.get(`/api/search/${searchTerms}`);
    },
    //Save one book to the database.
    saveBook: (book) => {
        return axios.post(`/api/books`, book);
    },
    //Get all books from the database.
    getBooks: () => {
        return axios.get(`/api/books`);
    },
    //Delete one book from the database.
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}