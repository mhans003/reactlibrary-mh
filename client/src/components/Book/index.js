import BookCard from "../BookCard";
import BookCardBody from "../BookCardBody";
import BookCardHeader from "../BookCardHeader";

const Book = props => {
    //This component displays a Book Card with information passed in via props.
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
                link={props.bookData.link}
            />
        </BookCard>
    );
}

export default Book;