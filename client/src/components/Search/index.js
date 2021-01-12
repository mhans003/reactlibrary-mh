import { useState, useRef } from "react";
import Container from "../Container";
import SearchResults from "../SearchResults";

//Include API functions 
import APIService from "../../Services/APIService";

const Search = () => {
    //Keep track of books to search for.
    const [searchTerms, setSearchTerms] = useState({text: ""});

    //Keep track of results.
    const [searchResults, setSearchResults] = useState([]);

    //Reference the input field.
    const searchInput = useRef();

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
                <div className="input-group">
                    <input type="text" name="search" onChange={onChange} className="form-control" minLength="1" required placeholder="Enter Search" ref={searchInput}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary fas fa-search" type="submit">
                        </button>
                    </div>
                </div>
            </form>
            {searchResults ? <SearchResults data={searchResults}/> : null}
        </Container>
    );
}

export default Search;