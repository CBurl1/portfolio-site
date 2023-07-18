import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/aboutme');
  };

  return (
    <div className="intro-card">
      <div className="intro-content">
        <h1>Collin Burleigh - Full Stack Developer</h1>
        <p>Welcome to my portfolio website! As a full stack developer, I am excited to showcase my experience and skills in web development. Enter through the button below to learn more about me and my work!</p>
        <button className="custom-button" onClick={handleEnterClick}>Enter</button>
      </div>
      <img
        className="intro-image"
        src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Stock"
      />
    </div>
  );
};

export default Intro;





