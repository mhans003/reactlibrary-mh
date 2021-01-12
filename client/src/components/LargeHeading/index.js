const MainHeading = (props) => {
    return (
        <div className="text-center my-5">
            <h1 className="squeezed font-light larger-spacing">{props.text}</h1>
            <hr/>
        </div>
    );
}

export default MainHeading;