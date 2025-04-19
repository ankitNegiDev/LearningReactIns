import { useEffect, useState } from "react";

function Effects(){
    const [count , setCount]=useState(0);
    useEffect(function callback(){
        console.log("love u i am useEffect");
    },[count])

    return (
        <>
            <button onClick={function callback(){setCount(count-1)}}>Sub</button>
            <h2>count : {count}</h2>
            <button onClick={function callback(){setCount(count+1)}}>Add</button>
        </>
    );
}

export default Effects;