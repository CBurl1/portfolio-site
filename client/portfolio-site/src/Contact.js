import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleLogoClick = (link) => {
    window.location.href = link;
  };

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
          <div className="logo-container">
            <div className="logo" onClick={() => handleLogoClick('https://www.linkedin.com/in/burleighcollin/')}>
              <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg" alt="LinkedIn Logo" />
            </div>
            <div className="logo" onClick={() => handleLogoClick('https://github.com/CBurl1')}>
              <img src="https://thurrott-assets.nyc3.digitaloceanspaces.com/web/wp-content/uploads/sites/2/2023/01/GitHub.jpeg" alt="GitHub Logo" />
            </div>
            <div className="logo" onClick={() => handleLogoClick('https://medium.com/@burleighcollin')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWVpKoZ-YRwxtMjn6TNZHo4da3r_cX00j1A&usqp=CAU" alt="Medium Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;








