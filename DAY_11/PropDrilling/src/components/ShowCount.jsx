import { useContext } from "react";
import { CountContext } from "./Context";

function ShowCount(){

    let count = useContext(CountContext)
    return(
        <>
            <h1>count : {count}</h1>
            {/* <h2>HunderedContext val is : {}</h2> */}
        </>
    );
}

export default ShowCount;