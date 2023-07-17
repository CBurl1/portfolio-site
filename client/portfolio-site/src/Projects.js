import React from 'react';
import './Projects.css'; // Import the CSS file for custom styling

const Projects = () => {
  return (
    <div className="projects-card">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <h3>Parki</h3>
          <img src="project1-image.jpg" alt="Project 1" className="project-image" />
          <p>
            Full stack web application that allows skiers and snowboarders to stay up to date with terrain parks around them
            <button className="project-button">
              <a href="https://www.loom.com/share/0969ad61551f4a20aa0475f60eacdc48?sid=bd930275-a07b-4f6c-9f68-6597398a82be">Watch a Demo</a>
            </button>
            <button className="project-button">
              <a href="https://github.com/CBurl1/parki">Checkout the GitHub</a>
            </button>
          </p>
        </div>
        <div className="project-item">
          <h3>Blockbuster Employee Portal</h3>
          <img src="project2-image.jpg" alt="Project 2" className="project-image" />
          <p>
            Full stack web application that allows employees to view, modify or create new movies, rentals, and clients
            <button className="project-button">
              <a href="https://www.loom.com/share/b4a2a4b99ca0436282f36163a2b26fca?sid=c4189144-a7c3-473e-b7ca-56cf54105b6e">Watch a Demo</a>
            </button>
            <button className="project-button">
              <a href="https://github.com/CBurl1/blockbuster-employee-portal">Checkout the GitHub</a>
            </button>
          </p>
        </div>
        <div className="project-item">
          <h3>Music Player and Storage</h3>
          <img src="project3-image.jpg" alt="Project 3" className="project-image" />
          <p>
            CLI application that stores music and play songs in a user’s browser
            <button className="project-button">
              <a href="https://www.loom.com/share/ef7adf3dce6b47a79b902834fefb9eb1?sid=bb162cd5-19d9-4820-9f82-294303372211">Watch a Demo</a>
            </button>
            <button className="project-button">
              <a href="https://github.com/CBurl1/music-CLI">Checkout the GitHub</a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;




