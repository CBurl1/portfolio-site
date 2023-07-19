import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-card card">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Background"
        />
        <div className="overlay">
          <div className="aboutme-heading-box">
            <h2 className="aboutme-heading">About Me</h2>
          </div>
          <div className="card-body">
            <div className="aboutme-container">
              <div className="aboutme-item">
                <h3>Who am I?</h3>
                <p>
                  As a graduate of the Flatiron School's Software Engineering program, I am a passionate full stack developer with a strong foundation in programming languages, frameworks, and software development concepts. I specialize in building intuitive user interfaces and crafting efficient backend systems.
                </p>
              </div>
              <div className="aboutme-item">
                <h3>What are my goals?</h3>
                <p>
                  My goal is to create engaging and intuitive websites that combine functionality and aesthetics. I am constantly seeking ways to improve my skills and knowledge, and I am always excited to try new things and exceed expectations.
                </p>
              </div>
              <div className="aboutme-item">
                <h3>What are my hobbies?</h3>
                <p>
                  When I'm not coding, you can usually find me outdoors. I play many sports, help coach a high school baseball team, and love being with family. I thrive on adventure and enjoy the challenge of trying new things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;










