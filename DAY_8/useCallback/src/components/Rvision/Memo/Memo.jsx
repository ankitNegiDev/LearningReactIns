// import { useState } from "react";

import { memo, useState } from "react";

// function Memo(){

//     return (
//         <>
//             <div>Memo</div>
//             <Y weight={200}/>
//             <X weight={230}/>
//         </>
//     );
// }

// function X({weight}){
//     const [wt,setWeight]=useState({weight})
//     return (
//         <>
//             <Y weight={wt}/>
//             <button
//                 onClick={function handelClick(){
//                     setWeight(Math.floor(Math.random()*10)+1)
//                 }}
//             >
//                 click
//             </button>
//         </>
//     );
// }
// function Y({weight}){
//     return (
//         <>
//             <h1>i am y  function and can lift {weight} kgs</h1>
//         </>
//     );
// }
// export default Memo;


function Memo(){
    const [name ,setName]=useState("anii");

    function handelClick(){
        setName(Math.floor(Math.random()*10)+1);
    }
    return (
        <div>
            <MyCompo name={name} />
            <MyCompo name={name} />
            <MyCompo name='ankit'/>


            <button onClick={handelClick}>Click</button>
        </div>
    );
}
// function MyCompo({name}){

//     return (
//         <>
//             <h1>my name is : {name}</h1>
//         </>
//     );
// }


let MyCompo=memo(function ({name}){
    console.log("name is : ",name);
    return(
        <>
            <h1>my name is : {name}</h1>
        </>
    );
})


export default Memo;