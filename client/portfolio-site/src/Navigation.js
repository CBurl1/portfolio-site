import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutme" activeClassName="active">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
