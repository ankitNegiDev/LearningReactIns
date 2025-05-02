import Button from "./Button";
import ShowCount from "./ShowCount";

function Counter({setCount}){

    return (
        <>
            {/* <h1>count : {count}</h1> */}
            {/* <ShowCount count={count}/> */}
            <ShowCount />

            {/* <Button count={count} setCount={setCount} /> */}
            <Button setCount={setCount} />
        </>
    );
}

export default Counter;