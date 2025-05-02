import { useContext } from "react";
import { CountContext } from "./Context";

function Button({ setCount}){
    let count=useContext(CountContext);
    function onClickInc(){
        setCount(count+1);
    }
    function onClickDec(){
        setCount(count-1);
    }
    return(
        <>
            <div>
                <button onClick={onClickInc}>incriment</button>
                <button onClick={onClickDec}>decriment</button>
            </div>
        </>
    );
}

export default Button;