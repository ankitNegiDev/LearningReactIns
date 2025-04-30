import { useState } from "react";
import Todo from "./Todo";

function Display() {
    const [todoArr, setTodoArr] = useState([
        { 
            title: "a", 
            description: "d" 
        },
        { title: "b", 
        description: "e"
        },
        { 
        title: "c", 
        description: "f" 
        },
        { title: "d", 
        description: "g" 
        },
    ]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleAddTodo() {
        const newTodo = {
            title: title,
            description: description,
        };

        setTodoArr([...todoArr, newTodo]);
        setDescription("");
        setTitle("");
    }
    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handelDes(event){
        setDescription(event.target.value);
    }

    return (
        <>
            <h1>display</h1>

            <h1>new todo </h1>
            <h2>Title</h2>
            <input type="text" onChange={handleTitle} />
            <h2>description</h2>
            <input type="text" onChange={handelDes}/>
            <button onClick={handleAddTodo}>Click add</button>
            <hr />
            {todoArr.map(function callback(todo, index) {
                return (
                    <Todo
                        key={index}
                        title={todo.title}
                        description={todo.description}
                    />
                );
            })}
        </>
    );
}

export default Display;
