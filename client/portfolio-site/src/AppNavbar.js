import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = ({ scrollToSection }) => {
  return (
    <Navbar bg="light" expand="lg" variant="light" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('resume')}>Resume</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;


