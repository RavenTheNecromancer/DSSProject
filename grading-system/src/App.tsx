import React from 'react';
import './styles/App.css';
import { Grade } from './interfaces';


function App() {

  let grade1 : Grade = {
    id: 1,
    studentFirstName: "Mitko",
    studentLastName: "Didkov",
    subject: "Matematika",
    score: 4,
    date: new Date(),
  };

  let grade2 : Grade = {
    id: 2,
    studentFirstName: "Monka",
    studentLastName: "Ludata",
    subject: "Bulgarski",
    score: 6,
    date: new Date(),
  };

  let grade3 : Grade = {
    id: 1,
    studentFirstName: "Sa6o",
    studentLastName: "Sa6ov",
    subject: "Istoriq",
    score: 2,
    date: new Date(),
  };
  
  return (
      <div className="content">

        <div className="navbar">
          <h1>Grading System</h1>
        </div>

        <div className="content-list">
          <ul className="items">
            <li>dvoika</li>
            <li>Troika</li>
            <li>4vorka</li>
          </ul>
        </div>

        <div className='content-details'>
          This is details!
        </div>
        
        <footer>This is footer</footer>
      </div>
  );
}

export default App;
