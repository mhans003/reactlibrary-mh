import Header from "../components/Header";
import LargeHeading from "../components/LargeHeading";
import SearchComponent from "../components/Search";

const Search = () => {
    return (
        <>
            <Header/>
            <LargeHeading text={"SEARCH BOOKS"}/>
            <SearchComponent/>
        </>
    );
};

export default Search;