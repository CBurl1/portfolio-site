import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/projects');
  };

  const handleLogoClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="intro-card">
      <div className="intro-content">
        <h1>Collin Burleigh - Full Stack Developer</h1>
        <p>Welcome to my portfolio website! As a full stack developer, I am excited to showcase my experience and skills in web development. Enter through the button below to learn more about me and my work!</p>
        <button className="custom-button" onClick={handleEnterClick}>Enter</button>
      </div>
      <div className="logos-container">
        <div className="logo" onClick={() => handleLogoClick('https://linkedin.com/in/burleighcollin')}>
          <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg" alt="Logo 1" />
        </div>
        <div className="logo" onClick={() => handleLogoClick('https://github.com/CBurl1')}>
          <img src="https://thurrott-assets.nyc3.digitaloceanspaces.com/web/wp-content/uploads/sites/2/2023/01/GitHub.jpeg" alt="Logo 2" />
        </div>
        <div className="logo" onClick={() => handleLogoClick('https://medium.com/@burleighcollin')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWVpKoZ-YRwxtMjn6TNZHo4da3r_cX00j1A&usqp=CAU" alt="Logo 3" />
        </div>
      </div>
    </div>
  );
};

export default Intro;






