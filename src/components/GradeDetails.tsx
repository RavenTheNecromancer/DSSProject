import React, { useState, ChangeEvent, FormEvent, useEffect, ChangeEventHandler} from 'react';
import { Grade } from '../interfaces';

interface Props{
    onSave: (grade: Grade) => void;
    onUpdate: (grade: Grade) => void;
    selectedGrade : Grade;
}

const GradeDetails : React.FC<Props> = (props : Props) => {

    let emptyGrade : Grade = {
        id: -1,
        studentFirstName: "",
        studentLastName: "",
        subject: "",
        score: 2,
        date: new Date(),
        active: true,
    };

    const [selectedGrade, setGrade] = useState<Grade>(emptyGrade);

    useEffect(() => {
        if (props.selectedGrade.active){
            //now updates the details section (previous error => used selectedGrade directly from hooks instead props.selectedGrade)
            setGrade(props.selectedGrade);
        }
        else{ handleClear(); }

        /* if (props.selectedGrade.active === false){
            handleClear();
        }
        else{
            setGrade(props.selectedGrade);
        } */
    }, [props.onSave])

    const handleClear = () => {
        setGrade(emptyGrade);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setGrade(prevGrade => ({...prevGrade, [name] : value}));
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setGrade(prevGrade => ({...prevGrade, date : new Date(value)}));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(selectedGrade.id !== -1){
            props.onUpdate(selectedGrade);
        }
        else{
            props.onSave(selectedGrade);
        }
    };

    return (
        <>
            <h2>Grade Details:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="studentFirstName">First Name: </label>
                    <input
                        className="input"
                        type="text"
                        id="field1"
                        name="studentFirstName"
                        value={selectedGrade.studentFirstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className="label" htmlFor="studentLastName">Last Name: </label>
                    <input
                        className="input"
                        type="text"
                        id="field2"
                        name="studentLastName"
                        value={selectedGrade.studentLastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className="label" htmlFor="subject">Subject: </label>
                    <input
                        className="input"
                        type="text"
                        id="field3"
                        name="subject"
                        value={selectedGrade.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className="label" htmlFor="score">Score: </label>
                    <input
                        className="input"
                        type="number"
                        id="field4"
                        name="score"
                        min="2" max="6"
                        value={selectedGrade.score}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className="label" htmlFor="date">Date: </label>
                    <input
                        className="input"
                        type="date"
                        id="field5"
                        name="date"
                        value={selectedGrade.date.toISOString().substring(0, 10)}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <button className='button-details' id='saveButton' type='submit'>Save</button>
            </form>

            <button className='button-details' id='clearButton' onClick={handleClear}>Clear</button>

        </>
    );
};

export default GradeDetails;