import { useState } from "react";

import BookCard from "../BookCard";
import BookCardBody from "../BookCardBody";
import BookCardHeader from "../BookCardHeader";
import ConfirmAddModal from "../ConfirmAddModal";
import AddErrorModal from "../AddErrorModal";

//Include API functions.
import APIService from "../../Services/APIService";

const SearchResult = (props) => {

    const [addBookShow, setAddBookShow] = useState(false);
    const [addErrorShow, setAddErrorShow] = useState(false);

    const handleFavoriteSave = event => {
        const newBook = {
            title: props.result.volumeInfo.title ? props.result.volumeInfo.title : null,
            authors: props.result.volumeInfo.authors ? props.result.volumeInfo.authors: null,
            description: props.result.volumeInfo.description ? props.result.volumeInfo.description : null,
            image: props.result.volumeInfo.imageLinks ? props.result.volumeInfo.imageLinks.thumbnail : null,
            thumbnail: props.result.volumeInfo.imageLinks ? props.result.volumeInfo.imageLinks.smallThumbnail : null,
            link: props.result.volumeInfo.infoLink ? props.result.volumeInfo.infoLink : null,
            read: false,
            apiID: props.result.id,
            categories: props.result.volumeInfo.categories ? props.result.volumeInfo.categories : null
        }

        APIService.saveBook(newBook).then(data => {
            console.log(data);
            handleAddBookShow();
        })
        .catch(error => {
            console.log(error);
            if(error) {
                handleAddErrorShow();
                console.log("Not Authenticated");
            }
        });
    };

    //Modal handlers
    const handleAddBookClose = () => setAddBookShow(false);
    const handleAddBookShow = () => setAddBookShow(true);

    const handleAddErrorClose = () => setAddErrorShow(false);
    const handleAddErrorShow = () => setAddErrorShow(true);

    return (
        <>
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
                    link={props.result.volumeInfo.infoLink}
                />
            </BookCard>
            <ConfirmAddModal
                title={props.result.volumeInfo.title}
                addBookShow={addBookShow}
                handleAddBookClose={handleAddBookClose}
            />
            <AddErrorModal
                title={props.result.volumeInfo.title}
                addErrorShow={addErrorShow}
                handleAddErrorClose={handleAddErrorClose}
            />
        </>
    );
}

export default SearchResult;