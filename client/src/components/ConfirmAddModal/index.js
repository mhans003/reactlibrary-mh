import { Modal } from "react-bootstrap";

const ConfirmAddModal = props => {
    //This modal displays when a user wants to add a new book to their list.
    return (
        <>
            <Modal show={props.addBookShow} onHide={props.handleAddBookClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="font-medium">Added</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <div>
                        <h3 className="font-light">This book is now saved in your library</h3>
                        <hr/>
                        <h5 className="font-medium"><i><strong>{props.title}</strong></i></h5>
                        <button className="btn btn-info btn-lg btn-block mt-3 mb-3" type="button" onClick={() => {
                            props.handleAddBookClose();
                        }}>
                            <i className="fas fa-check"></i>
                        </button>
                        <hr className="mb-4"/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ConfirmAddModal;