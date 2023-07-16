import React from "react";
import { Grade } from "../interfaces";
import { useState } from "react";

interface Props {
    grades: Grade[];
    onSelectedGrade: (data : Grade) => void;
    onDeletedGrade: (grades : Grade[]) => void;
}

const GradeList: React.FC<Props> = (props : Props) => 
{

    //hook used to check if a grade is deleted
    const [isGradeDeleted, setIsGradeDeleted] = useState(false);
    //hook used to check the selected grade
    const [selectedGrade, setGrade] = useState<Grade>();


    const handleClick = (id: number, ignoreItem: boolean) => {
        let foundGrade = props.grades.find((item) => item.id === id) as Grade;

        props.onSelectedGrade(foundGrade);
    };

    const handleDelete = (id: number) => {
        let deletedGrade = props.grades.find((item) => item.id === id) as Grade;
        setGrade(selectedGrade);
        const updatedGrades = props.grades.filter((grade) => grade.id !== id);
        props.onDeletedGrade(updatedGrades);
    };


    return(
        <>
            <h2>Grade List</h2>

            {props.grades.map((item) => (
                <li key={item.id} onClick={(ev) => {handleClick(item.id, isGradeDeleted) }}>
                    <p className="id">{item.id}</p>
                    <p className="field1">{item.studentFirstName}</p>
                    <p className="field2">{item.studentLastName}</p>
                    <p className="field3">{item.subject}</p>
                    <p className="field4">{item.score}</p>
                    <p className="field5">{item.date.toDateString()}</p>

                    <button className="deleteButton" onClick={() => handleDelete(item.id)}>Delete Grade</button>
                </li>
            ))}
        </>
    );
};

export default GradeList;