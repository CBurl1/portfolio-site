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
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>ReactJS</li>
            <li>Git</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Experience</h3>
          <p>
            Enter
          </p>
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
    </div>
  );
}

export default Resume;

