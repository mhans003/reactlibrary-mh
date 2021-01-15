import Header from "../components/Header";
import LargeHeading from "../components/LargeHeading";
import SearchComponent from "../components/Search";

const Search = props => {

    const handleBooksRedirect = event => {
        event.preventDefault();
        props.history.push("/user");
    };

    return (
        <>
            <Header/>
            <LargeHeading text={"SEARCH BOOKS"}/>
            <form className="my-5" onSubmit={handleBooksRedirect}>
                <div className="text-center">
                    <button className="btn btn-lg button-xl btn-outline-info font-medium small-spacing" type="submit">
                        My Books <i className="fad fa-book-reader ml-1"></i>
                    </button>
                </div>
            </form>
            <SearchComponent/>
        </>
    );
};

export default Search;