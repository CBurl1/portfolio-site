import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', textAlign: 'left', marginBottom: '20px' }}>Contact</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div>
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>City, Country</p>
          </div>
        </div>
        <div style={{ width: '400px', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;



