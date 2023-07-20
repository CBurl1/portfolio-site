import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-card card">
        <div className="overlay">
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
  );
}

export default AboutMe;











