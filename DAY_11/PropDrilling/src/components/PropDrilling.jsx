import { useState } from "react";
import Counter from "./Counter";
import Button from "./Button";
import { CountContext } from "./Context";

function PropDrilling(){

    const [count ,setCount]=useState(0);


    return (
        <>
            <h1>prop</h1>

            <CountContext.Provider value={count}>
            {/* <Count count={count} setCount={setCount} /> */}
            <Counter  setCount={setCount} />
            </CountContext.Provider>
            <Button count={count} setCount={setCount}/>
            {/* <hr/> */}
            {/* <Pure/> */}

            
            {/* <CountContext.Provider value={count}>
                <HunderedContex.Provider value={100}>
                    <Counter setCount={setCount} />
                </HunderedContex.Provider>
            </CountContext.Provider> */}
        </>
    );
}






/*
function Pure(){
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>pure</h1>
            <CountContext.Provider value={count}>
                <Counter setCount={setCount}/>
            </CountContext.Provider>
        </>
    );
}
*/
export default PropDrilling;


// bhaiya agar counter kisi or component se call hota to udhar bhii wrapp karna padtaa , ya bas ek barr karna hae .. the ans is yes....