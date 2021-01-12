const SearchResult = (props) => {
    return (
        <div>
            {props.result.volumeInfo.title}
        </div>
    );
}

export default SearchResult;