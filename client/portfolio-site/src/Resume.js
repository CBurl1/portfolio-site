import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', textAlign: 'left' }}>Resume</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
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
        <div style={{ flex: '1', marginLeft: '10px' }}>
          <h3 style={{ fontSize: '18px' }}>Experience</h3>
          <p>
            Enter
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <h3 style={{ fontSize: '18px' }}>Education</h3>
          <ul>
            <li>Graduate of the Flatiron School - 2023</li>
            <li>York County Community College</li>
          </ul>
        </div>
        <div style={{ flex: '1', marginLeft: '10px' }}>
          <h3>Certifications</h3>
          <ul>
            <li style={{ fontSize: '18px' }}>Software Engineering - The Flatiron School</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
