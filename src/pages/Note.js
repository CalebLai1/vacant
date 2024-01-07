import React, { useRef, useState, useEffect } from 'react';
import siteBg from '../assets/site-bg.jpg';
import { Link } from 'react-router-dom';

const Note = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('#000000'); // Initial color set to black
  const [thickness, setThickness] = useState(1);
  const [mode, setMode] = useState('Pen mode activated');

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white'; // Fill with white color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    setDrawing(true);
    draw(e);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [drawing]);

  const saveNote = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'note.png';
    link.click();
  };

  const handlePen = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
    setMode('Pen mode activated');
  };

  const handleEraser = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    setMode('Eraser mode activated');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', draw);
    };
  }, []);

  return (
    <div style={{
      backgroundImage: `url(${siteBg})`,
      backgroundSize: 'cover',
      height: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: 'white',
        padding: '10px',
        color: 'black'
      }}>
        <div style={{
          width: `${Number(thickness)}px`,
          height: `${Number(thickness)}px`,
          borderRadius: '50%',
          backgroundColor: color
        }} />
        <p>{mode}</p>
        <label>
          Color:
          <input type="color" onChange={(e) => setColor(e.target.value)} style={{ marginLeft: '10px' }} />
        </label>
        <label>
          Thickness:
          <input type="range" min="1" max="50" value={thickness} onChange={(e) => setThickness(e.target.value)} style={{ marginLeft: '10px' }} />
        </label>
        <button onClick={resetCanvas}>Reset</button>
        <button onClick={handleEraser}>Eraser</button>
        <button onClick={handlePen}>Pen</button>
        <button onClick={saveNote}>Save</button>
        <Link to="/TotallyAllServices"><button style={{ fontSize: '30px' }}>Back</button></Link>
      </div>
      <canvas ref={canvasRef} width={1500} height={1000} style={{ backgroundColor: 'white' }} />
    </div>
  );
};

export default Note;
