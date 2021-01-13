import { useState, useEffect } from "react";
import Container from "../Container";
import Message from "../Message";
import UserBookList from "../UserBookList";

//Include API functions.
import APIService from "../../Services/APIService";

const UserBooks = () => {
    //Initialize message state.
    const [message, setMessage] = useState(null);

    //Retrieve and save the books for this user.
    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
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
    }, []);
    //Create a state object that holds the books currently saved by this user (API IDs)
    //Using THESE objects (not the API results), render BookList with BookItem components
    //Each of these BookItems will have a button to handle the delete 

    //useEffect gets all the books saved from the DB and stores them in the state holding the books
    //Each time books is updated, the books are re-rendered

    //Make sure that the ID for the book (API ID) is removed from the user's books array on the server-side.

    return (
        <Container>  
            {message ? <Message message={message}/> : null}
            {
                userBooks ? <UserBookList books={userBooks}/> : 
                <h4 className="text-center font-light larger-spacing">NO BOOKS YET</h4>
            }
        </Container>
    );
}

export default UserBooks;