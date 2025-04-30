/**
 * the reason of error may be we are passing todosArray in the addTodo component ... but when we will set new newTodo in the todosArr then state which is "MyTodos" is changing and because of it Todos component will re-render and a new todosArr will be created.. that means in every change in state variable (MyTods) the new array is created and we are just adding a new single object at originalLength of array+1 that's why on every render title and descript changes instead of adding new one.

 *  todoArr -> original
 *  myTodos -> in which changes are done so techincally we should pass it in AddTodo.
 *  but if we think todosArr is initializing the myTodos on every re-render then it is used to set only inital value..
 * 
 * 
 * (2)nd is we can do it using useRef so there is no problem of creation of new arrya in every re-render we can directly do arr.push

 * (3) solution is use prev in setMytodos.
 * (4) solution is we can use useMemo to stop the creation of array in every-re-rneder.
 */

// (1) when passing the state (myTods) not the orignal array (todosArr)...
/*
import { Fragment, useState } from "react";
function Todos() {
    let todosArr = [
        { title: "surya namaskaar", desc: "good for gut" },
        { title: "shaam namaskaar", desc: "good for timepaaas" },
        { title: "raat namaskaar", desc: "good for sleeping" },
    ];
    let [myTodos, setMyTodos] = useState(todosArr);
    console.log("vlaue of myTodos is : ",myTodos);
    return (
        <Fragment>
            {/* <Todo title="surya namaskaar" desc="good for gut" />
            <Todo title="shaam namaskaar" desc="good for timepaaas"/>
            <Todo title="raat namaskaar"  desc="good for sleeping"/> *}

            {/* why we are passing todoArr why not myTodos directly *}
            {/* <AddTodo todos={todosArr} setMyTodos={setMyTodos} /> *}
            <AddTodo todos={myTodos} setMyTodos={setMyTodos} />

            <Todo todos={myTodos} />
        </Fragment>
    );
}

function Todo({ todos }) {
    return todos.map((item, index) => {
        return (
            <div key={index}>
                <h1>Title:{item.title} </h1>
                <p>Desc: {item.desc} </p>
            </div>
        );
    });
}

function AddTodo({ todos, setMyTodos }) {
    let [inp1, setInp1] = useState("");
    let [inp2, setInp2] = useState("");
    function handleInp1(e) {
        setInp1(e.target.value);
    }
    function handleInp2(e) {
        setInp2(e.target.value);
    }
    function handleAdd() {
        setMyTodos(() => {
            return [...todos, { title: inp1, desc: inp2 }];
        });
        setInp1("");
        setInp2("");
    }
    return (
        <div>
            <input onChange={handleInp1} type="text" value={inp1} />
            <input onChange={handleInp2} type="text" value={inp2} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

export default Todos;
*/


//(2) using the useRef..


/*

import { Fragment, useRef, useState } from "react";
function Todos() {
    let todosArr = [
        { title: "surya namaskaar", desc: "good for gut" },
        { title: "shaam namaskaar", desc: "good for timepaaas" },
        { title: "raat namaskaar", desc: "good for sleeping" },
    ];
    // let [myTodos, setMyTodos] = useState(todosArr);
    const myTodos = useRef([...todosArr]);
    // console.log("vlaue of myTodos is : ", myTodos);

    // state is maintained so that we can render the changes.
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Fragment>

            <AddTodo todos={myTodos} setIsAdded={setIsAdded} isAdded={isAdded}/>
            <Todo todos={myTodos} />
        </Fragment>
    );
}

function Todo({ todos }) {
    return todos.current.map((item, index) => {
        return (
            <div key={index}>
                <h1>Title:{item.title} </h1>
                <p>Desc: {item.desc} </p>
            </div>
        );
    });
}

function AddTodo({ todos,setIsAdded,isAdded}) {
    let [inp1, setInp1] = useState("");
    let [inp2, setInp2] = useState("");
    function handleInp1(e) {
        setInp1(e.target.value);
    }
    function handleInp2(e) {
        setInp2(e.target.value);
    }
    function handleAdd() {
        console.log("todos is : ",todos);
        todos.current.push({ title: inp1, desc: inp2 });
        setInp1("");
        setInp2("");
        console.log(isAdded);
        setIsAdded(!isAdded);
    }
    return (
        <div>
            <input onChange={handleInp1} type="text" value={inp1} />
            <input onChange={handleInp2} type="text" value={inp2} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

export default Todos;
*/


//(3) using use memo.... (the reason why we use useMemo is i want to memoised the refrence of array becasue thwn state change then array is created in every re-render so to prevent this we are using useMemo and to render the changes we maintain a state so that when a new to do added the parnt component re-render.)
/*
import { Fragment, useState, useMemo } from "react";

function Todos() {
    const todosArr = useMemo(
        () => [
            { title: "surya namaskaar", desc: "good for gut" },
            { title: "shaam namaskaar", desc: "good for timepaaas" },
            { title: "raat namaskaar", desc: "good for sleeping" },
        ],
        []
    );

    // state maintaind for the re-render when a new todo adedd.
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Fragment>
            <AddTodo
                todos={todosArr}
                setIsAdded={setIsAdded}
                isAdded={isAdded}
            />
            <Todo todos={todosArr} />
        </Fragment>
    );
}

function Todo({ todos }) {
    return todos.map((item, index) => {
        return (
            <div key={index}>
                <h1>Title: {item.title}</h1>
                <p>Desc: {item.desc}</p>
            </div>
        );
    });
}

function AddTodo({ todos, setIsAdded, isAdded }) {
    let [inp1, setInp1] = useState("");
    let [inp2, setInp2] = useState("");

    function handleInp1(e) {
        setInp1(e.target.value);
    }

    function handleInp2(e) {
        setInp2(e.target.value);
    }

    function handleAdd() {
        todos.push({ title: inp1, desc: inp2 });
        setInp1("");
        setInp2("");
        setIsAdded(!isAdded);
    }


    return (
        <div>
            <input onChange={handleInp1} type="text" value={inp1} />
            <input onChange={handleInp2} type="text" value={inp2} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

export default Todos;
*/

// (4) using previous state ....

import { Fragment, useState } from "react";
function Todos() {
    let todosArr = [
        { title: "surya namaskaar", desc: "good for gut" },
        { title: "shaam namaskaar", desc: "good for timepaaas" },
        { title: "raat namaskaar", desc: "good for sleeping" },
    ];
    let [myTodos, setMyTodos] = useState(todosArr);
    console.log("vlaue of myTodos is : ",myTodos);
    return (
        <Fragment>
            {/* <Todo title="surya namaskaar" desc="good for gut" />
            <Todo title="shaam namaskaar" desc="good for timepaaas"/>
            <Todo title="raat namaskaar"  desc="good for sleeping"/> *}

            {/* why we are passing todoArr why not myTodos directly */}
            <AddTodo setMyTodos={setMyTodos} />
            {/* <AddTodo todos={myTodos} setMyTodos={setMyTodos} /> */}

            <Todo todos={myTodos} />
        </Fragment>
    );
}

function Todo({ todos }) {
    return todos.map((item, index) => {
        return (
            <div key={index}>
                <h1>Title:{item.title} </h1>
                <p>Desc: {item.desc} </p>
            </div>
        );
    });
}

function AddTodo({  setMyTodos }) {
    let [inp1, setInp1] = useState("");
    let [inp2, setInp2] = useState("");
    function handleInp1(e) {
        setInp1(e.target.value);
    }
    function handleInp2(e) {
        setInp2(e.target.value);
    }
    function handleAdd() {
        // setMyTodos(() => {
        //     return [...todos, { title: inp1, desc: inp2 }];
        // });
        setMyTodos(function callback(previousState){
            return [...previousState, { title: inp1, desc: inp2 }];
        })
        setInp1("");
        setInp2("");
    }
    return (
        <div>
            <input onChange={handleInp1} type="text" value={inp1} />
            <input onChange={handleInp2} type="text" value={inp2} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

export default Todos;


/*
bhaiya we have 4 solution ..
(1) why we are passing original array todosArr we need to pass the state variable Array (myTodos)

(2) useRef
(3) useMemo
(both useRef and useMemo are based on the fact that we want to pass the original array todosArray so to stop the creation in every re-render.)
(4) using previous state.
*/ 