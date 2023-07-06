import './App.css';
import AppNavbar from './AppNavbar.js';
import React from 'react';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <AppNavbar scrollToSection={scrollToSection} />
      <header className="App-header">
        <section id="home">
          <h1>Collin Burleigh</h1>
          <h3>Full Stack Software Engineer</h3>
        </section>

        <section id="resume">
          <h2 className="section-title">Resume</h2>
          {/* Content for the Resume section */}
        </section>

        <section id="projects">
          <h2 className="section-title">Projects</h2>
          {/* Content for the Projects section */}
        </section>

        <section id="contact">
          <h2 className="section-title">Contact</h2>
          {/* Content for the Contact section */}
        </section>
      </header>
    </div>
  );
}

export default App;



