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

  return (
    <>
      <div className="content">
        <header className="navbar">
          <h1>Grading System</h1>
        </header>

        <main className="list-section">
          <ul className="items">
            <li>dvoika</li>
            <li>Troika</li>
            <li>4vorka</li>
          </ul>
        </main>

        <aside>
          This is details!
        </aside>
        
        
        <footer>This is footer</footer>
      </div>
    </>
  );
}

export default App;
