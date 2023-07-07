// import AppNavbar from './AppNavbar.js';
import React from 'react';
import Intro from './Intro.js'
import AboutMe from './Aboutme.js'
import Resume from './Resume.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

function App() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div>
      <Intro />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;



