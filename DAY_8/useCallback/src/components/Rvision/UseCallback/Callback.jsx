import { useCallback, useState } from "react";

function Callback() {
    const [count, setCount] = useState(0);
    function handelClick() {
        setCount(count + 1);
    }
    // let abc=10;

    // function abc() {
    //     console.log("i a m abc");
    // }
    let abc = useCallback(function callback() {
        console.log("i am a function");
    }, []);
    return (
        <>
            <MyCo b={abc} />
            <button onClick={handelClick}>counter</button>
            <h1>count : {count}</h1>
        </>
    );
}


function MyCo({b}){
    return (
        <h1>ia m  {b}</h1>
    );

}

// let MyCo=memo(({b})=>{
//  return <h1>ia m {b}</h1>;
// })
export default Callback;


// https://jsonplaceholder.typicode.com/todos