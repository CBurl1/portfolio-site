import React from 'react';
import './Projects.css';
import blockbuster from './blockbuster.png';

const Projects = () => {
  return (
    <div className="projects-card">
      <div className="projects-container">
        <div className="project-item">
          <h3>Parki</h3>
          <div className="project-content">
            <img src="https://i.redd.it/l3ouhs6ncj661.jpg" alt="Project 1" className="project-image" />
            <p>
              Full stack web application that allows skiers and snowboarders to stay up to date with terrain parks around them
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/0969ad61551f4a20aa0475f60eacdc48?sid=bd930275-a07b-4f6c-9f68-6597398a82be" target="_blank" rel="noreferrer">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/parki" target="_blank" rel="noreferrer">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Blockbuster Employee Portal</h3>
          <div className="project-content">
            <img src={blockbuster} alt="Project 2" className="project-image" />
            <p>
              Full stack web application that allows employees to view, modify or create new movies, rentals, and clients
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/b4a2a4b99ca0436282f36163a2b26fca?sid=c4189144-a7c3-473e-b7ca-56cf54105b6e" target="_blank" rel="noreferrer">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/blockbuster-employee-portal" target="_blank" rel="noreferrer">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Music Player and Storage</h3>
          <div className="project-content">
            <img src="https://static.vecteezy.com/system/resources/previews/021/660/070/original/mp3-player-collection-set-with-different-color-in-pixel-art-style-vector.jpg" alt="Project 3" className="project-image" />
            <p>
              CLI application with SQLAlchemy that stores music and play songs in a user’s browser
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/ef7adf3dce6b47a79b902834fefb9eb1?sid=bb162cd5-19d9-4820-9f82-294303372211" target="_blank" rel="noreferrer">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/music-CLI" target="_blank" rel="noreferrer">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Seasonal Produce Educator</h3>
          <div className="project-content">
            <img src="https://media.istockphoto.com/id/165723582/vector/pixel-fruits.jpg?s=612x612&w=0&k=20&c=cr7k9zjJ1jQ_6H-dbiVK4m5OmWUkWmSyLdK4Z0UtnWs=" alt="Project 4" className="project-image" />
            <p>
              Vanilla Javascript webpage to educate people on when produce is best to consume
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/33c5d5a064a74bffb5e62cf61ceb0515?sid=7646cda6-8780-4b4d-a16e-181291a27cca" target="_blank" rel="noreferrer">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/seasonal-produce-educator" target="_blank" rel="noreferrer">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h3>Ski Shop</h3>
          <div className="project-content">
            <img src="https://cdna.artstation.com/p/assets/images/images/048/109/936/large/kivanc-yucel-snowy-area2.jpg?1649234808" alt="Project 5" className="project-image" />
            <p>
              ReactJS Storefront for a ski shop
            </p>
            <div className="project-buttons">
              <button className="project-button">
                <a href="https://www.loom.com/share/c319bc1bd3a64593987db1d9cbf2506f?sid=26ce2f9a-be32-47fc-8c4c-885192bc2ef1" target="_blank" rel="noreferrer">Watch a Demo</a>
              </button>
              <button className="project-button">
                <a href="https://github.com/CBurl1/skishop-react-frontend" target="_blank" rel="noreferrer">Checkout the GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;








