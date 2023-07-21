import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation.js';
import Intro from './Intro.js';
import AboutMe from './Aboutme.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;




