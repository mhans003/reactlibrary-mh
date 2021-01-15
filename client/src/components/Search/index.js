import { useState, useContext, useRef } from "react";
import Container from "../Container";
import SearchResults from "../SearchResults";
import Message from "../Message";

//Include API functions 
import APIService from "../../Services/APIService";

//Include Global Book IDs
import { BookContext } from "../../Context/BookContext";

const Search = () => {
    //Keep track of books to search for.
    const [searchTerms, setSearchTerms] = useState({text: ""});

    //Initialize message state.
    const [message, setMessage] = useState(null);

    //Keep track of results.
    const [searchResults, setSearchResults] = useState([]);

    //Reference the input field.
    const searchInput = useRef();

    //Include Global Book IDs
    const bookContext = useContext(BookContext);
    console.log(bookContext.bookIds);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(searchTerms.text);

        APIService.searchBooks(searchTerms.text)
            .then(result => {
                console.log(result.data.items);
                setSearchResults(result.data.items);
                console.log(searchResults);
                //At end
                resetForm();
            })
            .catch(error => {
                console.log(error);
                setMessage({
                    msgBody: "Something went wrong",
                    msgError: true
                });
            });
    };

    const onChange = event => {
        setSearchTerms({text: event.target.value});
        console.log(searchTerms);
    }

    const resetForm = () => {
        setSearchTerms({text: ""});
        searchInput.current.value = "";
        console.log(searchTerms);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-5">
                    <input type="text" name="search" onChange={onChange} className="form-control form-control-lg" minLength="1" required placeholder="Enter Search" ref={searchInput}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-info fas fa-search" type="submit">
                        </button>
                    </div>
                </div>
                <hr className="hr-light mb-5"/>
            </form>
            {message ? <Message message={message}/> : null}
            {searchResults ? <SearchResults data={searchResults}/> : null}
        </Container>
    );
}

export default Search;