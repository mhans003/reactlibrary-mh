import { Modal } from "react-bootstrap";
import APIService from "../../Services/APIService";

const ConfirmDeleteModal = (props) => {
    //Handle submit here
    const handleSubmit = event => {
        event.preventDefault();

        APIService.deleteBook(props.id).then(data => {
            console.log(data);
            //After deleting book, retrieve books again.
            props.retrieveBooks();
        });
    };

    return (
        <>
            <Modal show={props.deleteBookShow} onHide={props.handleDeleteBookClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="font-medium">Confirm Delete</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <div>
                        <form className="form-group my-3" onSubmit={handleSubmit}>
                            <h3 className="font-light">Are you sure you want to delete this book from your list?</h3>
                            <hr/>
                            <p><strong>{props.title}</strong></p>
                            <button className="btn btn-outline-danger btn-lg btn-block mt-3 mb-3" type="submit" onClick={() => {
                                props.handleDeleteBookClose();
                            }}>
                                Yes, Delete <i className="fas fa-trash-alt"></i>
                            </button>
                        </form>
                        <hr className="mb-4"/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ConfirmDeleteModal;