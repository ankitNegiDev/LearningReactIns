import { useState } from "react";

function UseState(){
    
    const [name,setName]=useState("ankit");
    function handelClick(){
        let x=Math.floor(Math.random()*10)+1;
        setName(x);
    }

    return (
        <>
            <h1>Hello from {name}</h1>
            <button
                onClick={handelClick}
            >click</button>
        </>
    );
}

export default UseState;