import React, { useState, useEffect } from "react";
import '../App.css';

const Form = props => {
    const [member, setMember] = useState({ name: '', email: '', role: ''});

    const changedItem = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const newSubmit = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({ name: '', email: '', role: '' })
    }
    useEffect(() => {
        return setMember (props.memberToEdit || {name: '', email: '', role: ''})
    }, [props.memberToEdit])
    return(
        <form onSubmit={newSubmit} className="mem-form">
            <div className="mem-wrapper">
                <label htmlFor='name'>Name: </label>
                <input
                    id="name"
                    name="name"
                    value={member.name}
                    type="text"
                    onChange={changedItem}
                />
            </div>

            <div className="mem-wrapper">
                <label htmlFor='email'>Email: </label>
                <input
                    id="email"
                    name="email"
                    value={member.email}
                    type="text"
                    onChange={changedItem}
                />
            </div>
            
            <div className="mem-wrapper">
                <label htmlFor='role'>Role: </label>
                <input
                    id="role"
                    name="role"
                    value={member.role}
                    type="text"
                    onChange={changedItem}
                />
            </div>
            <button type="submit">Add Member</button>
        </form>
    )
}
export default Form;