// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Home(){


    return (
        <>
            <h1>Home component</h1>
            <li>
                <Link to="/cat">
                    <button>Cat</button>
                </Link>
            </li>
            <li>
                <Link to="/dog">
                    <button>Dog</button>
                </Link>
            </li>
            <li>
                <Link to="/loading">
                    <button>Loading</button>
                </Link>
            </li>
        </>
    );
}
export default Home;