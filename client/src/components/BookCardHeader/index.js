import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { useState } from "react";

import ContainerFluid from "../ContainerFluid";
import Row from "../Row";
import Col from "../Col";

const BookCardHeader = props => {
    //Set state for delete modal.
    const [deleteBookShow, setDeleteBookShow] = useState(false);

    //Modal handlers
    const handleDeleteBookClose = () => setDeleteBookShow(false);
    const handleDeleteBookShow = () => setDeleteBookShow(true);

    return (
        <div className="card-header">
            <ContainerFluid>
                <Row>
                    <Col size="col-sm-10">
                        <h3 className="small-spacing font-medium">
                            {props.title}
                        </h3>     
                        <h4 className="small-spacing">
                            {props.authors ? props.authors.map((author, index) => {
                                return (
                                    <span className="font-light" key={index}>
                                        <i>{author}{index === props.authors.length - 1 ? "" : ", "}</i>
                                    </span>
                                )
                            }) : null}
                        </h4> 
                    </Col>
                    <Col size="col-sm-2">
                        <div className="mt-3 mb-2 mb-sm-0">
                            {
                                props.handleSave ? 
                                <button 
                                    className="btn btn-outline-info btn-block fas fa-plus"
                                    onClick={() => props.handleSave()}>
                                </button> 
                                : null
                            }
                            {
                                props.handleRemove ? 
                                <button 
                                    className="btn btn-secondary btn-block fas fa-times"
                                    onClick={() => handleDeleteBookShow()}>
                                </button> 
                                : null
                            }
                        </div>
                        
                    </Col>
                </Row>
            </ContainerFluid>
            
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