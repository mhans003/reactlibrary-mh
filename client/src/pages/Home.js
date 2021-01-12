import Header from "../components/Header";
import LargeHeading from "../components/LargeHeading";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (
        <>
            <Header/>
            <LargeHeading text={"SEARCH BOOKS"}/>
            <SearchBar/>
        </>
    );
};

export default Home;