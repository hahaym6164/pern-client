import React, { Fragment, useState } from 'react';

const EditComment = ({ theComment }) => {
    const url = "http://localhost:8080"
    const [name, setName] = useState(theComment.name)
    const [company, setCompany] = useState(theComment.company)
    const [comment, setComment] = useState(theComment.comment)

    // edit function

    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { name, company, comment }
            const response = await fetch(url + `/comments/${theComment._id}`, {
                method: "PATCH",
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
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${theComment._id}`}>
                Edit
            </button>

            <div className="modal" id={`id${theComment._id}`}>
                <div className="modal-dialog">
                    <div className="modal-content text-left" >

                        <div className="modal-header">
                            <h4 className="modal-title">Editing</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form>
                            <div className="modal-body">

                                <div className='form-row '>
                                    <div className='form-group col-md-6'>
                                        <label > Name </label>
                                        <input className='form-control' placeholder='Name' value={name} onChange={e => {
                                            setName(e.target.value)
                                        }} /></div>
                                    <div className='form-group col-md-6'>
                                        <label> Company </label>

                                        <input className='form-control' placeholder='Company' value={company} onChange={e => {
                                            setCompany(e.target.value)
                                        }} /></div></div>
                                <div className='form-group'>
                                    <label> Comment </label>

                                    <input className='form-control' placeholder='Comment' value={comment} onChange={e => {
                                        setComment(e.target.value)
                                    }} /></div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={e => updateDescription(e)}>Edit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default EditComment