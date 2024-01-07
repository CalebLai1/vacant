import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteBg from '../assets/site-bg.jpg';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [newQuestion, setNewQuestion] = useState({question: "", answer: ""});
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleAdd = () => {
        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
        setNewQuestion({question: "", answer: ""});
        const updatedOptions = updatedQuestions.map((question, index) => generateOptions(question.answer, Math.min(updatedQuestions.length, 4), updatedQuestions));
        setOptions(updatedOptions);
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion((currentQuestion + 1) % questions.length);
        setSelectedOption(null);
    };

    const handleBack = () => {
        setCurrentQuestion((currentQuestion - 1 + questions.length) % questions.length);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setSubmitted(false);
    };

    const handleSubmit = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSubmitted(true);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleExport = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(questions)], {type: 'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "myQuestions.json";
        document.body.appendChild(element);
        element.click();
    };

    const handleImport = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const importedQuestions = JSON.parse(event.target.result);
            setQuestions(importedQuestions);
            const importedOptions = importedQuestions.map((question, index) => generateOptions(question.answer, Math.min(importedQuestions.length, 4), importedQuestions));
            setOptions(importedOptions);
        };
        reader.readAsText(file);
    };

    const generateOptions = (answer, numOptions, allQuestions) => {
        let options = [answer];
        const otherAnswers = allQuestions.filter(question => question.answer !== answer).map(question => question.answer);
        while (options.length < numOptions && otherAnswers.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherAnswers.length);
            const randomAnswer = otherAnswers[randomIndex];
            if (!options.includes(randomAnswer)) {
                options.push(randomAnswer);
            }
            otherAnswers.splice(randomIndex, 1);
        }
        options.sort(() => Math.random() - 0.5);
        return options;
    };

    const calculateGrade = () => {
        const percentage = (score / questions.length) * 100;
        let grade;
        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        return `You scored ${score} out of ${questions.length} (${percentage}%). Your grade is ${grade}.`;
    };

    return (
        <div style={{ 
            backgroundImage: `url(${siteBg})`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            color: 'black'
          }}>
            {!submitted ? (
                <>
                    <div style={{position: 'absolute', top: '10px', left: '10px', background: 'white', padding: '20px', marginBottom: '20px'}}>
                        <input value={newQuestion.question} onChange={e => setNewQuestion({...newQuestion, question: e.target.value})} placeholder="New Question" />
                        <br />
                        <input value={newQuestion.answer} onChange={e => setNewQuestion({...newQuestion, answer: e.target.value})} placeholder="Answer" />
                        <br />
                        <button onClick={handleAdd}>Add</button>
                        <br />
                        <button onClick={handleExport}>Export Questions</button>
                        <br />
                        <input type="file" onChange={handleImport} />
                    </div>
                    {questions[currentQuestion] && (
                        <div style={{background: 'white', padding: '20px', width: '300px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'auto'}}>
                            <h1>Question {currentQuestion + 1}: {questions[currentQuestion].question}</h1>
                            {options[currentQuestion].map((option, index) => (
                                <div key={index}>
                                    <input type="radio" id={`option-${index}`} name="option" value={option} checked={selectedOption === option} onChange={handleOptionChange} />
                                    <label htmlFor={`option-${index}`}>{option}</label>
                                </div>
                            ))}
                            <button onClick={handleBack} disabled={currentQuestion === 0}>Back</button>
                            <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Next</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                </>
            ) : (
                <div style={{background: 'white', padding: '20px', width: '300px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'auto'}}>
                    <h1>Quiz Results</h1>
                    <p>{calculateGrade()}</p>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
            <div style={{position: 'absolute', bottom: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
                <Link to="/TotallyAllServices"><button style={{ fontSize: '30px' }}>Back</button></Link>
            </div>
        </div>
    );
};

export default Quiz;
