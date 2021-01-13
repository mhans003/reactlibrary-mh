import BookCard from "../BookCard";
import BookCardBody from "../BookCardBody";
import BookCardHeader from "../BookCardHeader";

const Book = (props) => {
    console.log(props);
    return (
        <BookCard>
            <BookCardHeader
                title={props.bookData.title}
                authors={props.bookData.authors}
                handleRemove={true}
                id={props.bookData._id}
                retrieveBooks={props.retrieveBooks}
            />
            <BookCardBody
                image={props.bookData.image}
                categories={props.bookData.categories}
                description={props.bookData.description}
            />
        </BookCard>
    );
}

export default Book;