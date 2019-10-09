import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({ name: '', email: '', role: ''});

    const changedItem = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    return(
        <form>
            <label htmlFor='name'>Name</label>
            <input
                id="name"
                name="name"
                value={member.name}
                type="text"
                onChange={changedItem}
            />
            <label htmlFor='email'>Email</label>
            <input
                id="email"
                name="email"
                value={member.email}
                type="text"
                onChange={changedItem}
            />
            <label htmlFor='role'>Name</label>
            <input
                id="role"
                name="role"
                value={member.role}
                type="text"
                onChange={changedItem}
            />
        </form>
    )
}