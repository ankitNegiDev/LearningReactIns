import { useMemo } from "react";
import { useState } from "react";

function UseMemo() {


    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);
    function handelClick() {
        setCount(count + 1);
    }
    function handelInput (event) {
        setInput(Number(event.target.value));
    };

    // useMemo(callback, depdency array)
    const memoCount = useMemo(() => {
        let ans = 0;
        for (let i = 1; i <= input; i++) {
            ans += i;
        }
        return ans;
    }, [input]);





    return (
        <>
            <div>
                <input type="text" onChange={handelInput} value={input} />
                <h1>sum : {memoCount}</h1>
                <button onClick={handelClick}>Click</button>
                <h2>count : {count}</h2>
            </div>
        </>
    );
}

export default UseMemo;
