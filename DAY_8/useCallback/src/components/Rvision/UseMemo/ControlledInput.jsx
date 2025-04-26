import { useMemo, useState } from "react";

function ControlledMemo(){

    const [count , setCount]= useState(0);
    function handelClick(){
        setCount(count+1);
    }
    const [input, setInput]=useState(0)
    function handelChange(event){
        setInput(event.target.value);
    }
    // let ans=0;
    // for(let i=1; i<=input; i++){
    //     console.log("loop running");
    //     ans=ans+i;
    // }
    
    let returnedAns=useMemo(()=>{
        let ans;
        for(let i=1; i<=input; i++){
            ans=ans+i;
        }
        return ans;
    },[input]);

    return (
        <>
            <input type="text"  onChange={handelChange} value={input}/>
            <h1>sum is : {returnedAns}</h1>
            {/* <h1>sum is : {ans}</h1> */}
            <button
                onClick={handelClick}
            >counter</button>
            <h1>count : {count}</h1>
        </>
    );
}

export default ControlledMemo;