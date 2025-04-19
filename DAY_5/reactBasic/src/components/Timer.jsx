import { useEffect } from "react";

function Timer(){
    useEffect(function callback(){
        setTimeout(function callback(){
            console.log("hello");
        },5000);
    },[])
    return (
        <>
            <h1>timer</h1>
        </>
    );
}
export default Timer;