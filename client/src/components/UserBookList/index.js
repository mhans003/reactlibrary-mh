import Book from "../Book";

const UserBookList = (props) => {
    {
        return (
            <>
            {
                props.books.map(book => {
                    return <Book bookData={book}/>
                })
            }
            </>
        );
    }
}

export default UserBookList;