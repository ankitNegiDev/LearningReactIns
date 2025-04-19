import { useState } from "react";

function Button(){

    const [count , setCount]=useState(0);
    function handelLike(){
        setCount((count)=>{
            return count+1;
        });
    }
    function handelDisLike(){
        setCount((count)=>{
            return count-1;
        })
    }

    return (
        <>
            <button onClick={handelLike}></button>
            <h2>Count : {count}</h2>
            <button onClick={handelDisLike}></button>
        </>
    );
}