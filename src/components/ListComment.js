import React, { Fragment, useEffect, useState } from "react";
import EditComment from "./EditComment";
const ListComment = () => {
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

    const deleteComment = async (id) => {
        if (!window.confirm('You really want to delete this comment?')) return
        try {
            const response = await fetch(url + `/comments/${id}`, {
                method: "DELETE",
            })

            setComments(comments.filter(comment => comment._id !== id))
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>
            <div className="table-responsive">
                <table className="table w-100 d-block d-md-table mt-5 text-center">
                    <thead>
                        <tr>
                            <th style={{ minWidth: "150px" }}>Name</th>
                            <th style={{ minWidth: "150px" }}>Company</th>
                            <th style={{ minWidth: "300px" }}>Comments</th>
                            <th style={{ minWidth: "200px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(i => (
                            <tr key={i._id}>

                                <td style={{ verticalAlign: "middle" }}>{i.name}</td>
                                <td style={{ verticalAlign: "middle" }}>{i.company}</td>
                                <td style={{ maxWidth: "250px", lineBreak: "anywhere", verticalAlign: "middle" }}>{i.comment}</td>


                                <td style={{ verticalAlign: "middle" }}> <EditComment theComment={i} /> <button className="btn btn-danger"
                                    onClick={() => deleteComment(i._id)}>Delete</button></td>

                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </Fragment >
    )
}
export default ListComment;