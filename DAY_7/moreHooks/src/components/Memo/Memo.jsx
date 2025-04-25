import { memo } from "react";
import { useState } from "react";

function Memo(){
    const [title ,setTitle]=useState("bingo");

    function handelClick(){
        setTitle(Math.floor(Math.random()*10)+1);
    }

    return(
        <>
            <h1>memo</h1>
            <MyMemo name= {title}/>
            <button
                onClick={handelClick}
            >
                click
            </button>
            <MyMemo name="love"/>
            <MyMemo name="anki"/>
        </>
    );
}

let MyMemo = memo(function ({ name }) {
    return (
        <>
            <h1>my Memo</h1>
            <div>
                <h2>name : {name}</h2>
            </div>
        </>
    );
});

/*
function MyMemo({name}){

    return (
        <>
            <h1>my Memo</h1>
            <div>
                <h2>name : {name}</h2>
            </div>
        </>
    );
}
*/
export default Memo;