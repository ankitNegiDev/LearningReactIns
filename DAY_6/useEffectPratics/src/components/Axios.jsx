import axios from "axios";
import { useEffect, useState } from "react";
function Axios() {
    const API = "https://jsonplaceholder.typicode.com/posts";
    const [axiosData, setAxiosData] = useState([]);
    function call() {
        axios.get(API).then(function callback(response) {
            // console.log("ddata : ", response.data);
            setAxiosData(response.data);
        });
    }
    useEffect(function callback() {
        call();
    },[]);
    console.log("axios data : ",axiosData);
    return (
        <>
            <h1> api calling using axios an async</h1>
        </>
    );
}

export default Axios;
