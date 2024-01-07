import React from 'react';
import { Link } from 'react-router-dom';
import siteBg from '../assets/site-bg.jpg';

const AllServices = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${siteBg})`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
          }}>
        <h2 style={{fontSize: '60px', fontWeight: 'bold'}}>Welcome to All Services</h2>
        <Link to="/Note"><button style={{fontSize: '30px'}}>Note</button></Link>
        <Link to="/ToDo"><button style={{fontSize: '30px'}}>To-Do Lists</button></Link>
        <Link to="/Flashcards"><button style={{fontSize: '30px'}}>Flashcards</button></Link>
        <Link to="/Quiz"><button style={{fontSize: '30px'}}>Quiz Tools</button></Link>
        <Link to="/Pomo"><button style={{fontSize: '30px'}}>Pomodoro Timer</button></Link>
        <Link to="/Cite"><button style={{fontSize: '30px'}}>Citation and Bibliography Generator</button></Link>
        <Link to="/"><button style={{fontSize: '30px'}}>Back</button></Link>
        </div>
    );
};

export default AllServices;
