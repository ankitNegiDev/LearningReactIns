import { memo, useCallback, useState } from "react";

function Sam(){
    const [count ,setCount]=useState(0)
    function handelClick(){
        setCount(count+1);
    }
    // let a=100;

    // reference of fun si diff..
    /*
    function a(){
        console.log("i am a function ")
    }
    */
    // use callback accept two args one is callback,depdency array

    // remember the 
    let a = useCallback(function callback(){
        console.log("i am a function");
    },[])

    return (
        <>
            <Demo vlaue={a}/>
            <button
                onClick={handelClick}
            >
                click
            </button>
            <h1>count : {count}</h1>
        </>
    );
}

// function Demo({value}){

//     return(
//         <>
//             <h1>Hello from i am {value} </h1>
//         </>
//     );
// }

let Demo=memo(function ({ value }) {
    console.log("hello ia m mem\n");
    return (
        <>
            <h1>Hello from i am {value} </h1>
        </>
    );
});

export default Sam;