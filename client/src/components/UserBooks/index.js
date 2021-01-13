import { useState, useEffect, useContext } from "react";
import Container from "../Container";
import Message from "../Message";
import UserBookList from "../UserBookList";

import { BookContext } from "../../Context/BookContext";

//Include API functions.
import APIService from "../../Services/APIService";

const UserBooks = () => {
    //Initialize message state.
    const [message, setMessage] = useState(null);

    //Retrieve and save the books for this user.
    const [userBooks, setUserBooks] = useState([]);

    //Include Global Book IDs
    const bookContext = useContext(BookContext);

    const retrieveBooks = () => {
        APIService.getBooks().then(result => {
            console.log(result.data.books);
            setUserBooks(result.data.books);
            console.log(userBooks);   
        })
        .catch(error => {
            console.log(error);
            setMessage({
                msgBody: "Something went wrong. Try refreshing the page.",
                msgError: true
            });
        });
    };

    useEffect(() => {
        retrieveBooks();
    }, []);

    return (
        <Container>  
            {message ? <Message message={message}/> : null}
            {
                userBooks ? <UserBookList books={userBooks} retrieveBooks={retrieveBooks}/> : 
                <h4 className="text-center font-light larger-spacing">NO BOOKS YET</h4>
            }
        </Container>
    );
}

export default UserBooks;