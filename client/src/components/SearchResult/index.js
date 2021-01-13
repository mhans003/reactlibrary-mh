import BookCard from "../BookCard";
import BookCardBody from "../BookCardBody";
import BookCardHeader from "../BookCardHeader";

//Include API functions.
import APIService from "../../Services/APIService";

const SearchResult = (props) => {

    const handleFavoriteSave = event => {
        const newBook = {
            title: props.result.volumeInfo.title,
            authors: props.result.volumeInfo.authors,
            description: props.result.volumeInfo.description,
            image: props.result.volumeInfo.imageLinks.thumbnail,
            thumbnail: props.result.volumeInfo.imageLinks.smallThumbnail,
            link: props.result.volumeInfo.infoLink,
            read: false,
            apiID: props.result.id,
            categories: props.result.volumeInfo.categories
        }

        APIService.saveBook(newBook).then(data => {
            console.log(data);
        })
        .catch(error => {
            if(error) {
                console.log("not authenticated");
                console.log("Error. Not authorized. Save to global state");
            }
        });
    };

    const handleFavoriteRemove = event => {
        APIService.deleteBook(props.result.id).then(data => {
            //After boks are deleted, makes sure that global state is update to reflect updates.
        })
        .catch(error => {
            //Deal with error and create message object below.
            console.log(error);
        });
    };

    return (
        <BookCard>
            <BookCardHeader
                title={props.result.volumeInfo.title}
                authors={props.result.volumeInfo.authors}
                handleSave={handleFavoriteSave}
            />
            <BookCardBody
                image={props.result.volumeInfo.imageLinks ? props.result.volumeInfo.imageLinks.thumbnail : null}
                categories={props.result.volumeInfo.categories}
                description={props.result.volumeInfo.description}
            />
        </BookCard>
    );
}

export default SearchResult;