import React from 'react';
import './Projects.css'; // Import the CSS file for custom styling

const Projects = () => {
  return (
    <div className="projects-card">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <h3>Project 1</h3>
          <img src="project1-image.jpg" alt="Project 1" className="project-image" />
          <p>
            Created a responsive website for a local coffee shop using HTML, CSS, and JavaScript.
            <a href="project1-link">Watch a Demo</a>
            <a href="project1-link">Checkout the GitHub</a>
          </p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <img src="project2-image.jpg" alt="Project 2" className="project-image" />
          <p>
            Developed a web app using ReactJS that allows users to track their daily water intake.
            <a href="project2-link">Watch a Demo</a>
            <a href="project2-link">Checkout the GitHub</a>
          </p>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <img src="project3-image.jpg" alt="Project 3" className="project-image" />
          <p>
            Designed and coded a portfolio website for a small business owner using Bootstrap.
            <a href="project3-link">Watch a Demo</a>
            <a href="project3-link">Checkout the GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;



