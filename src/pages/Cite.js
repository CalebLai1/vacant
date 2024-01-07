import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteBg from '../assets/site-bg.jpg';

class Citation {
  constructor(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
  }

  format() {
    return `${this.author} (${this.year}). ${this.title}. ${this.publisher}.`;
  }
}

const Cite = () => {
  const [citations, setCitations] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCitation = new Citation(author, title, year, publisher);
    setCitations([...citations, newCitation].sort((a, b) => a.author.localeCompare(b.author)));
    setAuthor('');
    setTitle('');
    setYear('');
    setPublisher('');
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
      <div style={{position: 'absolute', top: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
        
        <form onSubmit={handleSubmit}>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
          <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="Publisher" required />
          <button type="submit">Add Citation</button>
        </form>
      </div>
      <div style={{border: '1px solid black', padding: '10px', background: 'white', width: '80%', height: '80%', overflow: 'auto'}}>
        <h1>Citations</h1>
        {citations.map((citation, index) => (
          <p key={index}>{citation.format()}</p>
        ))}
      </div>
      <div style={{position: 'absolute', bottom: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
        <Link to="/TotallyAllServices"><button style={{ fontSize: '30px' }}>Back</button></Link>
      </div>
    </div>
  );
};

export default Cite;
