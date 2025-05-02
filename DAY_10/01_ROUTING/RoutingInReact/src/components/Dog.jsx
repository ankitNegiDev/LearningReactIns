import { Link, useNavigate } from "react-router-dom";

function Dog() {
    let navigate=useNavigate();
    function redirectHandler(){
        console.log("lovely");
        navigate("/");
    }
    return (
        <>
            <h1>i am Dog component</h1>
            <li>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </li>
            <li>
                <Link to="/cat">
                    <button>Cat</button>
                </Link>
            </li>
            <button onClick={redirectHandler}>visit main compo</button>
        </>
    );
}
export default Dog;
