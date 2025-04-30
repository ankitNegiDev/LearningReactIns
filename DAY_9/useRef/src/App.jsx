import "./App.css";
import Display from "./Components/Todo/Display";
// import Todos from "./Components/Todo/Ta";

import Todos from "./Components/ClassTodo/Todos";
function App() {
    return (
        <>
            <div>Hello world</div>
            {/* <Display /> */}
            {/* <Todos/> */}
            <Todos/>
        </>
    );
}

export default App;

// task 1 no 1 ->  create a to do component that accept two thing , title , description.(input)
// task 2 no 2 -> initialize state / array with three todos  and display them
