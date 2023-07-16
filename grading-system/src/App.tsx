import React, { useState } from 'react';
import './styles/App.css';
import { Grade } from './interfaces';
import GradeList from './components/GradeList';

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
    id: 3,
    studentFirstName: "Sa6o",
    studentLastName: "Sa6ov",
    subject: "Istoriq",
    score: 2,
    date: new Date(),
  };

  //initial grade array
  let gradesOnInitialise = [grade1, grade2, grade3];

  //state hooks
  const [grades, setGrades] = useState(gradesOnInitialise);
  const [selectedGrade, setGrade] = useState<Grade>(grade1);


  const handleSaveGrade = (grade : Grade) => {
    let gradeLenght = grades.length + 1;
    grade.id = gradeLenght;
    let gradesArray = [...grades, grade] as Grade[];
    setGrades(gradesArray);
  }

  const handleGradeUpdate = (grade : Grade) => {
    let gradeIndex = grades.findIndex((item) => item.id === grade.id);
    let gradesArray = [...grades];
    let updatedGrade = {...grades[gradeIndex]};
    updatedGrade = grade;
    gradesArray[gradeIndex] = updatedGrade;
    setGrades(gradesArray);
  }
  
  const handleGradeSelection = (grade : Grade) => {
    setGrade(grade);
  }

  const handleGradeDelete = (gradeArray : Grade[]) => {
    let idIndex = 1;
    for (let i = 0; i < gradeArray.length; i++) gradeArray[i].id = idIndex++;

    return gradeArray;
  }

  return (
      <div className="content">

        <div className="navbar">
          <h1>Grading System</h1>
        </div>

        <div className="content-list">
          <GradeList grades = {grades} onSelectedGrade={handleGradeSelection} onDeletedGrade={(newGrades) => setGrades(handleGradeDelete(newGrades))} />
        </div>

        <div className='content-details'>
          
        </div>
        
        <footer>This is footer</footer>
      </div>
  );
}

export default App;
