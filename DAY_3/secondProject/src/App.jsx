
import "./App.css";
import { Bikes, Ducati, Ninja,Sujiki } from "./components/Bikes";
import Event from "./components/Events/Events";
import LuckyNumber from "./components/LuckyNumber/LuckyNumber";
import Objects from "./components/Objects/Objects";
import Person from "./components/Person";
import Task from "./components/Task/Task";
import Variable from "./components/Variable.jsx/Variable";

function App() {

    return (
        <>
            <Person name="ankit" />
            <Bikes name="sports bike" price={100000000} />
            <Ninja name="Kawasaki Ninja ZX-10R" price={340000000} />
            <Sujiki name="Suzuki GSX-R1000" price={459599999} />
            <Ducati name="Ducati Panigale V4" price="out of range" />
            <hr />
            {/* variable component */}
            <>
                <Variable />
                <hr />
                <hr />

                <Objects />
                <hr />
                <hr />
                <LuckyNumber userLuckyNumber={7} />
            </>

            <Event nameOfButton="bingolive"/>

            <Task/>
        </>
    );
}


export default App;
