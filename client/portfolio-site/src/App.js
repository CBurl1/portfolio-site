import './App.css';
import AppNavbar from './AppNavbar.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <header className="App-header">
        <section id="home">
          <h1>Collin Burleigh</h1>
          <h3>Full Stack Software Engineer</h3>
        </section>

        <section id="linkedin">
          {/* Content for the LinkedIn section */}
        </section>

        <section id="blog">
          {/* Content for the Blog section */}
        </section>

        <section id="resume">
          {/* Content for the Resume section */}
        </section>

        <section id="projects">
          {/* Content for the Projects section */}
        </section>

        <section id="contact">
          {/* Content for the Contact section */}
        </section>
      </header>
    </div>
  );
}

export default App;

