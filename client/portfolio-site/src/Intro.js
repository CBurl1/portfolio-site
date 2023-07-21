import React, { useState, useEffect } from 'react';
import './Intro.css';
import blockbuster from './blockbuster.png';

const Intro = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      title: 'Parki',
      image: 'https://i.redd.it/l3ouhs6ncj661.jpg',
      description: 'Full stack web application that allows skiers and snowboarders to stay up to date with terrain parks around them',
    },
    {
      title: 'Blockbuster Employee Portal',
      image: blockbuster,
      description: 'Full stack web application that allows employees to view, modify or create new movies, rentals, and clients',
    },
    {
      title: 'Music Player and Storage',
      image: 'https://static.vecteezy.com/system/resources/previews/021/660/070/original/mp3-player-collection-set-with-different-color-in-pixel-art-style-vector.jpg',
      description: 'CLI application with SQLAlchemy that stores music and play songs in a user’s browser',
    },
    {
      title: 'Seasonal Produce Educator',
      image: 'https://media.istockphoto.com/id/165723582/vector/pixel-fruits.jpg?s=612x612&w=0&k=20&c=cr7k9zjJ1jQ_6H-dbiVK4m5OmWUkWmSyLdK4Z0UtnWs=',
      description: 'Vanilla Javascript webpage to educate people on when produce is best to consume',
    },
    {
      title: 'Ski Shop',
      image: 'https://cdna.artstation.com/p/assets/images/images/048/109/936/large/kivanc-yucel-snowy-area2.jpg?1649234808',
      description: 'ReactJS Storefront for a ski shop',
    },
    {
      title: 'Portfolio Site',
      image: 'https://img.freepik.com/premium-vector/old-computer-pixel-art-style_475147-1000.jpg',
      description: 'This awesome website',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="intro-card">
      <div className="intro-content">
        <h1>Collin Burleigh - Full Stack Developer</h1>
        <p>
          Welcome to my portfolio website! As a full stack developer, I am excited to showcase my experience and skills in web development. Enter through the button below to learn more about me and my work!
        </p>
        <button className="custom-button" onClick={() => console.log('Enter clicked')}>
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











