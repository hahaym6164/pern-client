import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo"

const ListTodo = () => {
    const url = "http://localhost:8080"
    const [comments, setComments] = useState([])
    const getComments = async () => {
        try {
            const response = await fetch(url + "/comments")
            const jsonData = await response.json()
            setComments(jsonData)

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getComments();
    }, [])
    console.log(comments, 'test');

    return (
        <Fragment>
            <div class="table-responsive">
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>company</th>
                            <th>comment</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(i => (
                            <tr key={i.id}>

                                <td>{i.name}</td>
                                <td>{i.company}</td>
                                <td style={{ maxWidth: "250px", lineBreak: "anywhere" }}>{i.comment}</td>


                                <td> <EditTodo todo={i} /> <button className="btn btn-danger">Delete</button></td>

                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </Fragment >
    )
}
export default ListTodo;