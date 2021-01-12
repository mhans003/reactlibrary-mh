import SearchResult from "../SearchResult";

const SearchResults = (props) => {
    {
        return (
            <>
            {
                props.data.map(result => {
                    return <SearchResult result={result}/>
                })
            }
            </>
        );
    }
}

export default SearchResults;