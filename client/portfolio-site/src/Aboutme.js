import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-card card">
      <div className="card-body">
        <h2 className="aboutme-heading">About Me</h2>
        <div className="aboutme-container">
          <div className="aboutme-item">
            <h3>Who am I?</h3>
            <p>
              I am a full stack developer with a passion for code and design. My journey into web development began as a hobby, where I discovered the power of creating something from scratch. Since then, I have been working hard to learn and develop my skills in programming.
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
  );
}

export default AboutMe;




