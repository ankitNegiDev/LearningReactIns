import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
    const [target, setTarget] = useState(0);
    // let name="bingo";
    // function handelClick(){
    //     console.log("name is : ",name);
    //     name="anonymous";
    // }
    function handelClick() {
        let random=Math.floor(Math.random() * 10) + 1;
        console.log("random",random);
        setTarget(random)
        if (random>5) {
            // setUserName("anonymous");
            // console.log("username:",userName);
        }
    }
    const [counter, setCounter] = useState(0);

    // Generate a random number between 1 and 10
    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function handleIncrease() {
        setCounter((prev) => prev + getRandomNumber());
    }

    function handleDecrease() {
        setCounter((prev) => prev - getRandomNumber());
    }

    return (
        <>
            <div>Hello</div>
            <Button onClick={handelClick} target={target} />
            <br />
            <div style={{margin:"5px"}}>
                <Counter onClick={handleIncrease} label="Increase Random" />
                <h1>Counter: {counter}</h1>
                <Counter onClick={handleDecrease} label="Decrease Random" />
            </div>
        </>
    );
}

export default App;
