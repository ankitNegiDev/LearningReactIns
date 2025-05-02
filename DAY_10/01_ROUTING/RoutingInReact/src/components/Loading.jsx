import { Link } from "react-router-dom";

function Loading() {
    return (
        <>
            <h1>Loading</h1>
            <Link to="/cat">cat</Link>
            <Link to="/dog">Dog</Link>
        </>
    );
}
export default Loading;
