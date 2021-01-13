import SearchResult from "../SearchResult";

const SearchResults = (props) => {
    {
        return (
            <>
            {
                props.data.map((result, index) => {
                    return <SearchResult result={result} key={index}/>
                })
            }
            </>
        );
    }
}

export default SearchResults;