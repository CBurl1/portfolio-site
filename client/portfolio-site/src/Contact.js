import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-card">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-container">
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
          <p>
            <a href="https://www.linkedin.com/in/burleighcollin/">Connect with me!</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Medium</h3>
          <p>
            <a href="https://medium.com/@burleighcollin">Check out my blog!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;




