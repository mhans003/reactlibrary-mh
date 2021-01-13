import ContainerFluid from "../ContainerFluid";
import Row from "../Row";
import Col from "../Col";

const BookCardBody = (props) => {
    return (
        <div className="card-body">
            <ContainerFluid>
                <Row>
                    <Col size={"col-3"}>
                        <img src={props.image ? `${props.image}` : null} alt="Photo"/>
                    </Col>
                    <Col size={"col-9"}>
                        <h6 className="small-spacing">
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