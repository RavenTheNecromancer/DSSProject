import React from "react";
import { Grade } from "../interfaces";
import { useState } from "react";


interface Props {
    grades: Grade[];
    onSelectedGrade: (data: Grade) => void;
    onDeletedGrade: (grades: Grade[]) => void;
}

const GradeList: React.FC<Props> = (props : Props) => 
{

    //hook used to check if a grade is deleted
    const [isGradeDeleted] = useState(false);
    //hook used to check the selected grade
    const [selectedGrade, setGrade] = useState<Grade>();


    const handleClick = (id: number, ignoreItem: boolean) => {
        let foundGrade = props.grades.find((item) => item.id === id) as Grade;
        props.onSelectedGrade(foundGrade);
    };

    const handleDelete = (id: number) => {
        let deletedGrade = props.grades.find((item) => item.id === id) as Grade;
        deletedGrade.active = false;
        setGrade(selectedGrade);
        const updatedGrades = props.grades.filter((grade) => grade.id !== id);
        props.onDeletedGrade(updatedGrades);
    };


    return(
        <>
            <h2>Grade List</h2>

            {props.grades.length === 0 ? <h3>No Grades in entry</h3> : null}
            {props.grades.map((item) => (
                <li key={item.id} onClick={(e) => {handleClick(item.id, isGradeDeleted) }}>
                    <p className="id"><span id="bolded">Id:</span> {item.id}</p>
                    <p className="field1"><span id="bolded">First Name:</span> {item.studentFirstName}</p>
                    <p className="field2"><span id="bolded">Last Name:</span> {item.studentLastName}</p>
                    <p className="field3"><span id="bolded">Subject:</span> {item.subject}</p>
                    <p className="field4"><span id="bolded">Score:</span> {item.score}</p>
                    <p className="field5"><span id="bolded">Date:</span> {item.date.toDateString()}</p>

                    <button className="deleteButton button" onClick={() => handleDelete(item.id)}>Delete Grade</button>
                </li>
            ))}
        </>
    );
};

export default GradeList;