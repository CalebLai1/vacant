import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pomo from './pages/Pomo';
import Note from './pages/Note';
import ToDo from './pages/ToDo';
import Flashcards from './pages/Flashcards';
import Cite from './pages/Cite';
import Quiz from './pages/Quiz';

import TotallyAllServices from './pages/TotallyAllServices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<App/>} />
        <Route path="/Note" element={<Note/>} />
        <Route path="/ToDo" element={<ToDo/>} />
        <Route path="/Flashcards" element={<Flashcards/>} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/Pomo" element={<Pomo/>} />
        <Route path="/Cite" element={<Cite/>} />
        <Route path="/TotallyAllServices" element={<TotallyAllServices/>} />
    </Routes>
  </BrowserRouter>
);
