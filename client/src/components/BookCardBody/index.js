import ContainerFluid from "../ContainerFluid";
import Row from "../Row";
import Col from "../Col";

const BookCardBody = (props) => {
    return (
        <div className="card-body">
            <ContainerFluid>
                <Row>
                    <Col size={"col-md-3"}>
                        <div className="mx-auto text-center">
                            <img src={props.image ? `${props.image}` : null} alt="Photo"/>
                        </div>
                    </Col>
                    <Col size={"col-md-9"}>
                        <h6 className="small-spacing mt-3 mt-md-0">
                            {props.categories ? props.categories.map((category, index) => {
                                return (
                                    <span className="font-light" key={index}>
                                        <i>{category}{index === props.categories.length - 1 ? "" : ", "}</i>
                                    </span>
                                )
                            }) : null}
                        </h6>
                        <p className="card-text font-light">
                            {props.description ? `${props.description.substring(0,500)}...` : ""}
                        </p>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    )
}

export default BookCardBody;