import React, { useState, useEffect } from 'react';
import siteBg from '../assets/site-bg.jpg';
import { Link } from 'react-router-dom';


const Pomo = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [breakDuration, setBreakDuration] = useState(900);
  const [pomoDuration, setPomoDuration] = useState(1500);
  const [state, setState] = useState(true);
  const [myInterval, setMyInterval] = useState(null);
  const [minutes, setMinutes] = useState(0); // Add state for minutes
  const [seconds, setSeconds] = useState(0); // Add state for seconds
  const [statusMessage, setStatusMessage] = useState(''); // Add state for status message

  useEffect(() => {
    return () => {
      if (myInterval) {
        clearInterval(myInterval);
      }
    };
  }, [myInterval]);

  const updateDisplay = (totalSeconds) => {
    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;
    setMinutes(minutesLeft);
    setSeconds(secondsLeft < 10 ? '0' + secondsLeft : secondsLeft);
  };

  const appTimer = () => {
    if (state) {
      setState(false);
      setStatusMessage('Timer started');
      if (totalSeconds === 0) {
        setTotalSeconds(pomoDuration);
      }

      updateDisplay(totalSeconds);

      const updateSeconds = () => {
        setTotalSeconds(prevTotalSeconds => {
          let newTotalSeconds = prevTotalSeconds - 1;

          if (newTotalSeconds === 0) {
            // Play your sound here
            clearInterval(myInterval);
            setState(true);
            setStatusMessage('Timer finished');
            newTotalSeconds = 0; // Reset totalSeconds when the timer is done.
          }

          updateDisplay(newTotalSeconds);
          return newTotalSeconds;
        });
      };

      setMyInterval(setInterval(updateSeconds, 1000));
    } else {
      alert('Session has already started.');
    }
  };

  const stopTimer = () => {
    clearInterval(myInterval);
    setState(true);
    setStatusMessage('Timer stopped');
    updateDisplay(totalSeconds);
  };
  

  const shortBreak = () => {
    setBreakDuration(300);
    setTotalSeconds(breakDuration);
    updateDisplay(breakDuration); // Pass breakDuration as argument
  };
  
  const longBreak = () => {
    setBreakDuration(900);
    setTotalSeconds(breakDuration);
    updateDisplay(breakDuration); // Pass breakDuration as argument
  };
  
  const pomo25 = () => {
    setPomoDuration(1500);
    setTotalSeconds(pomoDuration);
    updateDisplay(pomoDuration); // Pass pomoDuration as argument
  };
  
  const pomo20 = () => {
    setPomoDuration(1200);
    setTotalSeconds(pomoDuration);
    updateDisplay(pomoDuration); // Pass pomoDuration as argument
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
      gap: '20px'
    }}>
      <h1>Pomo</h1>
      <div style={{ fontSize: '2em' }}>{minutes}:{seconds}</div>
      <div>{statusMessage}</div> {/* Display the status message */}
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={appTimer}>Start</button>
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={stopTimer}>Stop</button>
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={shortBreak}>Short Break</button>
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={longBreak}>Long Break</button>
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={pomo25}>Pomo 25</button>
      <button style={{ padding: '10px 20px', margin: '5px', borderRadius: '50px' }} onClick={pomo20}>Pomo 20</button>
      <div style={{position: 'absolute', bottom: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
      <Link to="/TotallyAllServices" style={{ textDecoration: 'none' }}>
  <button style={{ fontSize: '30px', color: 'black', padding: '10px' }}>Back</button>
</Link>

</div>
    </div>
    
  );
};

export default Pomo;