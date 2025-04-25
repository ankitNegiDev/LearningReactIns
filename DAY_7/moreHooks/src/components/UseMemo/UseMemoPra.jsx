import { useState } from "react";
// import { useMemo } from "react";

function UseMemoPra(){

    const [inputValue,setInputValue]=useState(0);
    const [count,setCount]=useState(0);

    function handelInput(event){
        // setInputValue(event.target.inputValue); 
        setInputValue(Number(event.target.value));
    }
    let ans=0;
    for(let i=1; i<=inputValue; i++){
        ans=ans+i;
    }


    function handelClick(){
        setCount(count+1);
    }


    return (
        <>
            <h1>Useemo pratics</h1>
            <input type="number" onChange={handelInput}  value={inputValue} />
            <h2>Sum of input value is : {ans}</h2>
            <button
                onClick={handelClick}
            >
                click
            </button>
            <h2>Count : {count}</h2>
        </>
    );
}

export default UseMemoPra;