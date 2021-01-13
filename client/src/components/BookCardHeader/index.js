const BookCardHeader = (props) => {
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
                        onClick={() => props.handleRemove()}>
                    </button> 
                    : null
                }
            </h3>
            <h6 className="small-spacing">
                {props.authors ? props.authors.map((author, index) => {
                    return (
                        <span className="font-light">
                            <i>{author}{index === props.authors.length - 1 ? "" : ", "}</i>
                        </span>
                    )
                }) : null}
            </h6> 
        </div>
    )
}

export default BookCardHeader;