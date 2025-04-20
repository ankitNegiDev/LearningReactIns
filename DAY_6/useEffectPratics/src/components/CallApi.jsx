import { useEffect, useState } from "react";

function ApiCalling() {
    const API = "https://jsonplaceholder.typicode.com/posts";
    const [apiData, setApiData] = useState([]);
    function calling() {
        fetch(API)
            .then(function callback(data) {
                console.log("partial data is : ", data);
                let response = data.json();
                return response;
            })
            .then(function callback(response) {
                console.log("finial response : ", response);
                setApiData(response);
            })
            .catch(function callback(err) {
                console.log("error : ", err);
            });
    }
    async function asyncAwaitApi() {
        const data = await fetch(API);
        const response = await data.json();
        console.log("Final response:", response);
        setApiData(response);
    }
    useEffect(function callback() {
        calling();
        asyncAwaitApi();
    }, []);
    console.log("api data : ", apiData);
    return (
        // <React.Fragment>
        //     <h1>Api calling Component</h1>
        // </React.Fragment>
        // or either we import  the frag ments..
        <>
            <h1>Api calling component..</h1>
        </>
    );
}

export default ApiCalling;
