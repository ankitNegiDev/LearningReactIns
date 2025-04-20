import "./App.css";
import Axios from "./components/Axios";
import ApiCalling from "./components/CallApi";
import Task from "./components/Task";

function App() {
    return (
        <>
            <div>Hello world</div>
            {/* <ApiCalling/> */}
            {/* <Axios/> */}
            <Task userName={"samarth0606"} />
            <Task userName={"priyansh159"}/>
            <Task userName={"Sattwik13"} />
        </>
    );
}

export default App;
