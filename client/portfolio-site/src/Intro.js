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
    {
      title: 'Portfolio Site',
      image: 'https://img.freepik.com/premium-vector/old-computer-pixel-art-style_475147-1000.jpg',
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    }, 2000); // Change project every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

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
      <div className="projects-carousel">
        <div className="project-carousel-item">
          <h3>{projects[currentProject].title}</h3>
          <div className="project-content">
            <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-image" />
            <p>{projects[currentProject].description}</p>
          </div>
        </div>
        <div className="project-carousel-item">
          <h3>{projects[(currentProject + 1) % projects.length].title}</h3>
          <div className="project-content">
            <img src={projects[(currentProject + 1) % projects.length].image} alt={projects[(currentProject + 1) % projects.length].title} className="project-image" />
            <p>{projects[(currentProject + 1) % projects.length].description}</p>
          </div>
        </div>
        <div className="project-carousel-item">
          <h3>{projects[(currentProject + 2) % projects.length].title}</h3>
          <div className="project-content">
            <img src={projects[(currentProject + 2) % projects.length].image} alt={projects[(currentProject + 2) % projects.length].title} className="project-image" />
            <p>{projects[(currentProject + 2) % projects.length].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;











