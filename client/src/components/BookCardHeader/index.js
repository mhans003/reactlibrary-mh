import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { useState } from "react";

const BookCardHeader = (props) => {
    //Set state for delete modal.
    const [deleteBookShow, setDeleteBookShow] = useState(false);

    //Modal handlers
    const handleDeleteBookClose = () => setDeleteBookShow(false);
    const handleDeleteBookShow = () => setDeleteBookShow(true);

    return (
        <div className="card-header">
            <h3 className="small-spacing font-light">
                {props.title}
                {
                    props.handleSave ? 
                    <button 
                        className="btn btn-secondary fas fa-check mx-auto"
                        onClick={() => props.handleSave()}>
                    </button> 
                    : null
                }
                {
                    props.handleRemove ? 
                    <button 
                        className="btn btn-danger fas fa-trash mx-auto"
                        onClick={() => handleDeleteBookShow()}>
                    </button> 
                    : null
                }
            </h3>
            <h6 className="small-spacing">
                {props.authors ? props.authors.map((author, index) => {
                    return (
                        <span className="font-light" key={index}>
                            <i>{author}{index === props.authors.length - 1 ? "" : ", "}</i>
                        </span>
                    )
                }) : null}
            </h6> 
            <ConfirmDeleteModal
                title={props.title}
                id={props.id}
                deleteBookShow={deleteBookShow}
                handleDeleteBookClose={handleDeleteBookClose}
                retrieveBooks={props.retrieveBooks}
            />
        </div>
    )
}

export default BookCardHeader;