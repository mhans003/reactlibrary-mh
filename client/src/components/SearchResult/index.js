import ContainerFluid from "../ContainerFluid";
import Row from "../Row";
import Col from "../Col";

const SearchResult = (props) => {
    return (
        <div className="card mx-3 my-2">
            <div className="card-header">
                <h3 className="small-spacing font-light">{props.result.volumeInfo.title}</h3>
                <h6 className="small-spacing">
                    {props.result.volumeInfo.authors ? props.result.volumeInfo.authors.map((author, index) => {
                        return (
                        <span className="font-light">
                            <i>{author}{index === props.result.volumeInfo.authors.length - 1 ? "" : ", "}</i>
                        </span>
                        )
                    }) : null}
                </h6>
            </div>
            <div className="card-body">
                <ContainerFluid>
                    <Row>
                        <Col size={"col-3"}>
                            <img src={props.result.volumeInfo.imageLinks ? `${props.result.volumeInfo.imageLinks.thumbnail}` : null} alt="Photo"/>
                        </Col>
                        <Col size={"col-9"}>
                            <h6 className="small-spacing">
                                {props.result.volumeInfo.categories ? props.result.volumeInfo.categories.map((category, index) => {
                                    return (
                                        <span className="font-light">
                                            <i>{category}{index === props.result.volumeInfo.categories.length - 1 ? "" : ", "}</i>
                                        </span>
                                    )
                                }) : null}
                            </h6>
                            <p className="card-text font-light">
                                {props.result.volumeInfo.description ? `${props.result.volumeInfo.description.substring(0,500)}...` : ""}
                            </p>
                        </Col>
                    </Row>
                </ContainerFluid>
            </div>
        </div>
    );
}

export default SearchResult;