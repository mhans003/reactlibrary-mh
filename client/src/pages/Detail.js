import Header from "../components/Header";
import LargeHeading from "../components/LargeHeading";
import UserBooks from "../components/UserBooks";

const Detail = (props) => {

    const handleSearchRedirect = event => {
        event.preventDefault();
        props.history.push("/search");
    };
    
    return (
        <>
            <Header/>
            <LargeHeading text={"MY BOOKS"}/>
            <form className="my-5" onSubmit={handleSearchRedirect}>
                <div className="text-center">
                    <button className="btn btn-lg button-xl btn-info font-medium small-spacing" type="submit">
                        Search Books <i className="fad fa-search ml-1"></i>
                    </button>
                </div>
            </form>
            <UserBooks/>
        </>
    );
}

export default Detail; 