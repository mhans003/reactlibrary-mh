import { useState, useRef } from "react";
import Container from "../Container";

const SearchBar = () => {
    //Keep track of books to search for.
    const [searchTerms, setSearchTerms] = useState({text: ""});

    //Reference the input field.
    const searchInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(searchTerms);



        //At end
        resetForm();
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
        </Container>
    );
}

export default SearchBar;