import Book from "../Book";

const UserBookList = (props) => {
    {
        return (
            <>
            {
                props.books.map(book => {
                    return <Book bookData={book} retrieveBooks={props.retrieveBooks}/>
                })
            }
            </>
        );
    }
}

export default UserBookList;