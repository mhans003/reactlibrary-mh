import Book from "../Book";

const UserBookList = (props) => {
    {
        return (
            <>
            {
                props.books.map((book, index) => {
                    return <Book bookData={book} retrieveBooks={props.retrieveBooks} key={index}/>
                })
            }
            </>
        );
    }
}

export default UserBookList;