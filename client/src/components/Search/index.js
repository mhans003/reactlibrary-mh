import { useState, useContext, useRef } from "react";

import Container from "../Container";
import SearchResults from "../SearchResults";
import Message from "../Message";

//Include API functions 
import APIService from "../../Services/APIService";

const Search = () => {
    //Keep track of books to search for.
    const [searchTerms, setSearchTerms] = useState({text: ""});

    //Initialize message state.
    const [message, setMessage] = useState(null);

    //Keep track of results.
    const [searchResults, setSearchResults] = useState([]);

    //Reference the input field.
    const searchInput = useRef();

    //Handle submit for retrieving books from API.
    const handleSubmit = event => {
        event.preventDefault();
        console.log(searchTerms.text);

        APIService.searchBooks(searchTerms.text)
            .then(result => {
                console.log(result.data.items);
                setSearchResults(result.data.items);
                console.log(searchResults);
                //Reset the form.
                resetForm();
            })
            .catch(error => {
                console.log(error);
                setMessage({
                    msgBody: "Something went wrong. Please try again.",
                    msgError: true
                });
            });
    };

    //Each time the form changes, update the text value of the search to be sent to the API.
    const onChange = event => {
        setSearchTerms({text: event.target.value});
        console.log(searchTerms);
    }

    const resetForm = () => {
        //Clear fields.
        setSearchTerms({text: ""});
        searchInput.current.value = "";
        console.log(searchTerms);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-5">
                    <input 
                        type="text" 
                        name="search" 
                        onChange={onChange} 
                        className="form-control form-control-lg" 
                        minLength="1" 
                        required 
                        placeholder="Enter Search" 
                        ref={searchInput}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-info fas fa-search" type="submit">
                        </button>
                    </div>
                </div>
                <hr className="hr-light mb-5"/>
            </form>
            {message ? <Message message={message}/> : null}
            {
                searchResults.length > 0 ? 
                    <>
                        <SearchResults data={searchResults}/>
                        <hr className="hr-light my-5"/>
                    </>: null
            }
        </Container>
    );
}

export default Search;