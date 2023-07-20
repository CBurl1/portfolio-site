import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>collin.s.burleigh@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Greater Boston, United States</p>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <button className="contact-button">
              <a href="https://www.linkedin.com/in/burleighcollin/">Connect with me!</a>
            </button>
          </div>
          <div className="contact-item">
            <h3>Medium</h3>
            <button className="contact-button">
              <a href="https://medium.com/@burleighcollin">Check out my blog!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;






