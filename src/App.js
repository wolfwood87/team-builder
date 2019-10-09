import React, { useState } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Form from './Components/Form.js';

function App() {
  const [team, setTeam] = useState([{}])
  return (
    <div className="Members">
      <h1>Team Members</h1>
      {team.map((mem, id) => {
        return (
          <div className="member" key={id}>
            <h2>{mem.name}</h2>
            <p>{mem.details}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
