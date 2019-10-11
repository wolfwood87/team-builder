import React, { useState } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Form from "./Components/Form.js";

function App() {
  const [team, setTeam] = useState([{ id: '', name: '', email: '', role: '' }]);

  const [memberToEdit, setMemberToEdit] = useState({});

  const addMember = memb => {
    const newMember = {
      id: Date.now(),
      name: memb.name,
      email: memb.email,
      role: memb.role
    };
    setTeam([...team, newMember]);
  }

  return (
    <div className="Members">
      <h1>Team Members</h1>
      <Form addMember={addMember} memberToEdit={memberToEdit}/>
      {team.map((mem, id) => {
        console.log(mem)
        return (
          <div className="member" key={id}>
            <h2>{mem.name}</h2>
            <p>{mem.email}</p>
            <p>{mem.role}</p>
            <button onClick={()=>setMemberToEdit(mem)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
