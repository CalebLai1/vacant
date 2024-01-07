import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteBg from '../assets/site-bg.jpg';

const Flashcards = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [newCard, setNewCard] = useState({question: "", answer: ""});
    const [isFlipped, setIsFlipped] = useState(false);

    const handleAdd = () => {
        setFlashcards(oldCards => [...oldCards, newCard]);
        setNewCard({question: "", answer: ""});
    };

    const handleNext = () => {
        setCurrentCard((currentCard + 1) % flashcards.length);
        setShowAnswer(false);
        setIsFlipped(false);
    };

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
        setIsFlipped(!isFlipped);
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(flashcards)], {type: 'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "myFlashcards.json";
        document.body.appendChild(element);
        element.click();
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setFlashcards(JSON.parse(event.target.result));
        };
        reader.readAsText(file);
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
            <div style={{position: 'absolute', top: '10px', left: '10px', background: 'white', padding: '20px', marginBottom: '20px'}}>
                <input value={newCard.question} onChange={e => setNewCard({...newCard, question: e.target.value})} placeholder="New Question" />
                <br />
                <input value={newCard.answer} onChange={e => setNewCard({...newCard, answer: e.target.value})} placeholder="New Answer" />
                <br />
                <button onClick={handleAdd}>Add</button>
                <br />
                <button onClick={handleDownload}>Download Flashcards</button>
                <br />
                <input type="file" onChange={handleUpload} />
            </div>
            <div style={{background: 'white', padding: '20px', width: '300px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'auto'}}>
                <h1>{showAnswer ? flashcards[currentCard]?.answer : flashcards[currentCard]?.question}</h1>
            </div>
            <div style={{background: 'white', padding: '20px', width: '200px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <button onClick={handleShowAnswer}>{showAnswer ? 'Show Question' : 'Show Answer'}</button>
                <br />
                <button onClick={handleNext}>Next</button>
                <div style={{position: 'absolute', bottom: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
                    <Link to="/TotallyAllServices"><button style={{ fontSize: '30px' }}>Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Flashcards;
