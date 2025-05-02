import { Link } from "react-router-dom";

function Cat(){

    return (
        <>
            <h1>i am Cat component</h1>
            <li>
                <Link to="/">
                    <button>Cat</button>
                </Link>
            </li>
            <li>
                <Link to="/dog">
                    <button>Dog</button>
                </Link>
            </li>
        </>
    );
}
export default Cat;