import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo"

const ListTodo = () => {
    const url = "http://localhost:8080"
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch(url + "/todos")
            const jsonData = await response.json()
            setTodos(jsonData)

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])
    console.log(todos, 'test');

    return (
        <Fragment>

            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(i => (
                        <tr key={i.todo_id}>

                            <td>{i.todo_id}</td>
                            <td>{i.description}</td>


                            <td> <EditTodo todo={i} /> <button className="btn btn-danger">Delete</button></td>

                        </tr>
                    ))}


                </tbody>
            </table>
        </Fragment >
    )
}
export default ListTodo;