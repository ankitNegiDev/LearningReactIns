import { useState } from "react";

function Sam(){
    const [name , setName] = useState("ankit");
    function handelClick(){
        setName(Math.floor(Math.random()*10)+1);
        console.log("name : ",name);
    }
    return(
        <>
            <button
                onClick={handelClick}
            >
                click
            </button>
            <h1>name : {name}</h1>
        </>
    );
}
export default Sam;