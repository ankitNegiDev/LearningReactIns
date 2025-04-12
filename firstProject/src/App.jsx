import "./App.css";
import Button from "./components/Button/Button";
// import Person from "./components/Person/Person"; // default export.
import { Person } from "./components/Person/Person"; // named export.

// both are same either we write Car.jsx or Car since we are importing from the file Car which is inside the Car folder.
// import { Audi, Bmw, Car, RangeRower } from "./components/Car/Car";

import {Car,Bmw,RangeRower,Audi} from "./components/Car/Car.jsx";

function App() {

    return (
        <>
            <div> hello world </div>
            <Button />
            {/* Component calling and passing a prop. */}
            <Person name="ankit" age={23} favcolor="aqua" />
            <Person name="bingolive" age={59} favcolor="red" />
            <br />
            <br />
            <h2>..................Having multiple component insdie the single component.............</h2>
            <br />
            <br />
            <div>
                <Car price={34000} />
                <hr />
                <Bmw price={45000} />
                <hr />

                <RangeRower price={4500008} />
                <hr />

                <Audi price={45780000} />
            </div>
        </>
    );
}

export default App;
