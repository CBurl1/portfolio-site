import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:collin.s.burleigh@gmail.com" target="_blank" rel="noreferrer">
                collin.s.burleigh@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Greater Boston, United States</p>
          </div>
          <div className="logo-container">
            <div className="logo">
              <a href="https://www.linkedin.com/in/burleighcollin/" target="_blank" rel="noreferrer">
                <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg" alt="LinkedIn Logo" />
              </a>
            </div>
            <div className="logo">
              <a href="https://github.com/CBurl1" target="_blank" rel="noreferrer">
                <img src="https://thurrott-assets.nyc3.digitaloceanspaces.com/web/wp-content/uploads/sites/2/2023/01/GitHub.jpeg" alt="GitHub Logo" />
              </a>
            </div>
            <div className="logo">
              <a href="https://medium.com/@burleighcollin" target="_blank" rel="noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWVpKoZ-YRwxtMjn6TNZHo4da3r_cX00j1A&usqp=CAU" alt="Medium Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;










