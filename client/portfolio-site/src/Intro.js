import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import blockbuster from './blockbuster.png';

const Intro = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      title: 'Parki',
      image: 'https://i.redd.it/l3ouhs6ncj661.jpg',
    },
    {
      title: 'Blockbuster Employee Portal',
      image: blockbuster,
    },
    {
      title: 'Music Player and Storage',
      image: 'https://static.vecteezy.com/system/resources/previews/021/660/070/original/mp3-player-collection-set-with-different-color-in-pixel-art-style-vector.jpg',
    },
    {
      title: 'Seasonal Produce Educator',
      image: 'https://media.istockphoto.com/id/165723582/vector/pixel-fruits.jpg?s=612x612&w=0&k=20&c=cr7k9zjJ1jQ_6H-dbiVK4m5OmWUkWmSyLdK4Z0UtnWs=',
    },
    {
      title: 'Ski Shop',
      image: 'https://cdna.artstation.com/p/assets/images/images/048/109/936/large/kivanc-yucel-snowy-area2.jpg?1649234808',
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const navigateCarousel = (direction) => {
    if (direction === 'next') {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    } else if (direction === 'prev') {
      setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
    }
  };

  const navigateCarouselTo = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className="intro-card">
      <div className="intro-content">
        <h1>Collin Burleigh - Full Stack Developer</h1>
        <p>
          Welcome to my portfolio website! As a full stack developer, I am excited to showcase my experience and skills in web development. Enter through the button below to learn more about me and my work!
        </p>
        <button className="custom-button" onClick={handleClick}>
          Enter
        </button>
      </div>
      <div className="dot-navigation">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentProject ? 'active-dot' : ''}`}
            onClick={() => navigateCarouselTo(index)}
          />
        ))}
      </div>
      <div className="projects-carousel">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-carousel-item ${index === currentProject ? 'active' : ''}`}
          >
            <h3>{project.title}</h3>
            <div className="project-content">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;












