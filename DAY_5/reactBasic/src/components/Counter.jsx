import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function add() {
        // setCount(count-1);  // don't do this..
        // setCount(count-1);
        setCount(function callback(count) {
            return (count = count + 1);
        });
        setCount(function callback(count) {
            return count = count + 1;
        });
        setCount((count)=>{
            return count=count+1;
        })
    }
    function sub() {
        setCount(function callback(count) {
            return count = count - 1;
        });
        setCount(function callback(count) {
            return (count = count - 1);
        });
        setCount((count)=>{
            return count=count-1;
        })
    }
    return (
        <>
            <button onClick={add}>Add </button>
            <h2>count : {count}</h2>
            <button onClick={sub}>Sub </button>
        </>
    );
}
export default Counter;


// like button  (value increased by 1),  dislike button  (value decrease by 1)