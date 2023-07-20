import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-card">
      <div className="projects-container">
        <div className="project-item">
          {/* Project 1 */}
          <h3>Parki</h3>
          <div className="project-content">
            <img src="https://i.redd.it/l3ouhs6ncj661.jpg" alt="Project 1" className="project-image" />
            <p>
              Full stack web application that allows skiers and snowboarders to stay up to date with terrain parks around them
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/0969ad61551f4a20aa0475f60eacdc48?sid=bd930275-a07b-4f6c-9f68-6597398a82be">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/parki">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          {/* Project 2 */}
          <h3>Blockbuster Employee Portal</h3>
          <div className="project-content">
            <img src="https://cdna.artstation.com/p/assets/images/images/022/896/926/large/samantha-lau-cinema.jpg?1577141449" alt="Project 2" className="project-image" />
            <p>
              Full stack web application that allows employees to view, modify or create new movies, rentals, and clients
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/b4a2a4b99ca0436282f36163a2b26fca?sid=c4189144-a7c3-473e-b7ca-56cf54105b6e">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/blockbuster-employee-portal">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          {/* Project 3 */}
          <h3>Music Player and Storage</h3>
          <div className="project-content">
            <img src="https://static.vecteezy.com/system/resources/previews/021/660/070/original/mp3-player-collection-set-with-different-color-in-pixel-art-style-vector.jpg" alt="Project 3" className="project-image" />
            <p>
              CLI application that stores music and play songs in a user’s browser
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/ef7adf3dce6b47a79b902834fefb9eb1?sid=bb162cd5-19d9-4820-9f82-294303372211">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/music-CLI">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        {/* New Project 4 */}
        <div className="project-item">
          <h3>New Project 4</h3>
          <div className="project-content">
            <img src="URL_TO_IMAGE" alt="Project 4" className="project-image" />
            <p>
              Description of New Project 4
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="URL_TO_DEMO">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="URL_TO_GITHUB">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        {/* New Project 5 */}
        <div className="project-item">
          <h3>New Project 5</h3>
          <div className="project-content">
            <img src="URL_TO_IMAGE" alt="Project 5" className="project-image" />
            <p>
              Description of New Project 5
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="URL_TO_DEMO">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="URL_TO_GITHUB">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        {/* New Project 6 */}
        <div className="project-item">
          <h3>New Project 6</h3>
          <div className="project-content">
            <img src="URL_TO_IMAGE" alt="Project 6" className="project-image" />
            <p>
              Description of New Project 6
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="URL_TO_DEMO">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="URL_TO_GITHUB">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;







