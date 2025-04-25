import { useMemo } from "react";
import { useState } from "react";

function Task1() {
    const [inputVal1, setInputVal1] = useState(0);
    const [inputVal2, setInputVal2] = useState(0);

    function handelInput1(event) {
        setInputVal1(event.target.value);
    }

    function handelInput2(event) {
        setInputVal2(event.target.value);
    }
    let ans=0
    const sum = useMemo(() => {
        ans = parseInt(inputVal1) + parseInt(inputVal2);
        return ans;
    }, [inputVal1, inputVal2]);

    return (
        <>
            <input type="text" onChange={handelInput1} value={inputVal1} />
            <h1>sum of two input val is : {sum}</h1>
            <input type="text" onChange={handelInput2} value={inputVal2} />
        </>
    );
}

export default Task1;