// import AppNavbar from './AppNavbar.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation.js'
import Intro from './Intro.js'
import AboutMe from './Aboutme.js'
import Resume from './Resume.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import './App.css'

function App() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (

    <BrowserRouter>\
    <Navbar/>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;



