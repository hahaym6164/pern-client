import React, { Fragment, useState } from "react";

const InputComment = () => {

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [clicked, setClicked] = useState(false)
    const [comment, setComment] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { name, company, comment }
            const response = await fetch('http://localhost:8080/comments', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/";

        } catch (err) {
            console.error(err);

        }
    }


    return (
        <Fragment>
            <h1 className="text-center mt-5">Leave your comments or message here</h1>
            <form className={clicked ? "was-validated mt-5 ml-auto mr-auto " : "mt-5 ml-auto mr-auto"} style={{ flexWrap: "wrap", maxWidth: "500px" }} onSubmit={onSubmitForm}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input placeholder="Your Name" className="form-control" required value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">

                        <input placeholder="Your Company" className="form-control" required value={company}
                            onChange={e => setCompany(e.target.value)} />
                    </div>
                </div>
                <div className="form-group ">
                    <textarea placeholder="Your Comment or Message"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className="form-control" rows="4" cols="50" required></textarea>

                </div>
                <div className="form-group">

                    <button className="btn btn-success btn-lg btn-block" onClick={() => {
                        setClicked(true)
                    }
                    }> Leave your message</button>
                </div>
            </form>
        </Fragment >
    )
}
export default InputComment;