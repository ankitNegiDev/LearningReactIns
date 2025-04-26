import axios from "axios";
import { useEffect, useState } from "react";

function Effect() {
    const [todos, setTodos] = useState([]);
    async function callApi() {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(response.data);
        setTodos(response.data);
    }
    // callApi();

    useEffect(function callback() {
        callApi();
    });

    return (
        <>
            <h1>i ma effect</h1>
            <div>
                {todos.map(function callback(item) {
                    return (
                        <>
                            <h1>item : {item.id}</h1>
                            <h2>title : {item.title}</h2>
                            {/* to show the tru and false we use json.stringfy and tostring */}
                            <h3>
                                is Completed : {JSON.stringify(item.completed)}
                            </h3>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Effect;
