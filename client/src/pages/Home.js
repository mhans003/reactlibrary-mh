import Header from "../components/Header";
import LargeHeading from "../components/LargeHeading";
import Search from "../components/Search";

const Home = () => {
    return (
        <>
            <Header/>
            <LargeHeading text={"SEARCH BOOKS"}/>
            <Search/>
        </>
    );
};

export default Home;