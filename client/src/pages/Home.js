import Header from "../components/Header";
import Message from "../components/Message";
import LargeHeading from "../components/LargeHeading";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { useRef, useState, useEffect, useContext } from "react";

const Home = (props) => {
    //Initialize user state.
    const [user, setUser] = useState({email: "guest@guest.com", username: "guest", password: "guest"});
    //Initialize message state.
    const [message, setMessage] = useState(null);
    //Set input fields to enabled by default until logged in.
    const [disabled, setDisabled] = useState(false);

    //Create a reference for the timer.
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const authContext = useContext(AuthContext);

    //Handle when the form is submitted.
    const handleGuestLogin = (event) => {
        event.preventDefault();
        //Send user information to log in.
        AuthService.login(user).then(data => {
            //Once returned, pull out the needed data from the response.
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated) {
                //Update global context with user information.
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                //Once authenticated, redirect to books for current user.
                setMessage({
                    msgBody: "Success! Logging in...",
                    msgError: false
                });

                setDisabled(true);

                timerID = setTimeout(() => {
                    props.history.push("/user");
                }, 10);
            } else {
                //Otherise, set an error message.
                setMessage(message);
                console.log(data);
            }
        });
    };

    return (
        <>
            <Header/>
            <h1 className="font-light text-center my-5">Search and save books of interest</h1>
            <form className="mt-5 text-center" onSubmit={handleGuestLogin}>
                <button className="btn btn-lg btn-info font-light" type="submit" disabled={disabled}>
                    CONTINUE AS GUEST
                </button>
            </form>
            {message ? <Message message={message}/> : null}
            <hr/>
            <div className="text-center my-4">
                <h2 className="font-light text-center">Returning Users</h2>
                <Link to={"login"}>
                    <button className="btn-lg btn-primary font-light">SIGN IN</button>
                </Link>
            </div>
            <div className="text-center">
            <h2 className="font-light text-center">Create Account</h2>
                <Link to={"register"}>
                    <button className="btn-lg btn-primary font-light">REGISTER</button>
                </Link>
            </div>
        </>
    );
};

export default Home;