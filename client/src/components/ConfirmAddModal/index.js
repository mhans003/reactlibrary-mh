import { Modal } from "react-bootstrap";

const ConfirmAddModal = (props) => {

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
                        <p><strong>{props.title}</strong></p>
                        <button className="btn btn-outline-primary btn-lg btn-block mt-3 mb-3" type="button" onClick={() => {
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