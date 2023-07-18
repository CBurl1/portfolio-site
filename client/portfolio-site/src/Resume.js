import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-card">
      <h2 style={{ fontSize: '24px', textAlign: 'left' }}>Resume</h2>
      <div className="resume-grid">
        <div className="resume-item">
          <h3>Skills</h3>
          <ul>
            <li>Python</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Flask</li>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Experience</h3>
          <ul>
            <li>E-commerce Specialist</li>
            <li>Lead Line Cook</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Education</h3>
          <ul>
            <li>Graduate of the Flatiron School - 2023</li>
            <li>York County Community College</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Certifications</h3>
          <ul>
            <li>Software Engineering - The Flatiron School</li>
          </ul>
        </div>
      </div>
      <div className="resume-link">
        <h3>View Resume:</h3>
        <button className="resume-button">
          <a href="https://docs.google.com/document/d/1KVP-qPeiQulp7XfonAlBQbnZ1DD69EeuoxykKqWosc8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Click here to view my resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;


