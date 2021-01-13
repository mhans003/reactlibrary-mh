import ContainerFluid from "../ContainerFluid";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

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
        <div className="card mx-3 my-2">
            <div className="card-header">
                <h3 className="small-spacing font-light">
                    {props.result.volumeInfo.title} <button className="btn btn-secondary fas fa-check mx-auto" onClick={() => handleFavoriteSave()}></button>
                </h3>
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