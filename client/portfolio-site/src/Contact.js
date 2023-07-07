import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', textAlign: 'left' }}>Contact</h2>
      <div>
        <h3>LinkedIn</h3>
        <p>
          <a href="https://www.linkedin.com/">LinkedIn Profile</a>
        </p>
      </div>
      <div>
        <h3>Medium</h3>
        <p>
          <a href="https://medium.com/">Medium Profile</a>
        </p>
      </div>
      <div>
        <h3>Email</h3>
        <p>example@example.com</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>City, Country</p>
      </div>
    </div>
  );
}

export default Contact;
