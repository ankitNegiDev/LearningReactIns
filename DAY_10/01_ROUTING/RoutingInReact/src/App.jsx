import {  Routes ,Route} from "react-router-dom";
import "./App.css";
import Cat from "./components/Cat";
import Home from "./components/Home"
import Dog from "./components/Dog";
import Loading from "./components/Loading";
// import { lazy } from "react";

// const Dashboard = React.lazy(()=>import("./components/Dashboard"))

// const Profile = React.lazy(()=> import("./components/Profile"))

function App() {
    return (
        <>
            <div>Hello world</div>
            {/* <div>
                <ul>
                    <li>
                        <a href="/cat">Cat</a>
                    </li>
                    <li>
                        <a href="/dog">dog</a>
                    </li>
                    <li>
                        <a href="/">home</a>
                    </li>
                </ul>
            </div> */}

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cat" element={<Cat />} />
                <Route path="/dog" element={<Dog />} />
                <Route path="/loading" element={<Loading/>} />
            </Routes>
        </>
    );
}

export default App;
