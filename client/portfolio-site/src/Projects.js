import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', textAlign: 'left' }}>Projects</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Project 1</h3>
              <img src="project1-image.jpg" alt="Project 1" />
              <p>
                Created a responsive website for a local coffee shop using HTML, CSS, and JavaScript. 
                <a href="project1-link">View Project</a>
              </p>
            </td>
            <td>
              <h3>Project 2</h3>
              <img src="project2-image.jpg" alt="Project 2" />
              <p>
                Developed a web app using ReactJS that allows users to track their daily water intake. 
                <a href="project2-link">View Project</a>
              </p>
            </td>
            <td>
              <h3>Project 3</h3>
              <img src="project3-image.jpg" alt="Project 3" />
              <p>
                Designed and coded a portfolio website for a small business owner using Bootstrap. 
                <a href="project3-link">View Project</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

