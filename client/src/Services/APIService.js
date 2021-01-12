import axios from "axios";

export default {
    //Search Google Books
    searchBooks: (searchTerms) => {
        return axios.get(`/api/search/${searchTerms}`);
    }
}