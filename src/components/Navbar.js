import React from 'react';
import '../App.css'

function Navbar({ currentSection, onNavbarClick }) {
  return (
    <nav>
      <a
        href="aboutme"
        className={currentSection === 'about-me' ? 'active' : ''}
        onClick={(event) => {
          event.preventDefault();
          onNavbarClick('about-me');
        }}
      >
        About Me
      </a>
      |
      <a
        href="portfolio"
        className={currentSection === 'portfolio' ? 'active' : ''}
        onClick={(event) => {
          event.preventDefault();
          onNavbarClick('portfolio');
        }}
      >
        Portfolio
      </a>
      |
      <a
        href="contact"
        className={currentSection === 'contact' ? 'active' : ''}
        onClick={(event) => {
          event.preventDefault();
          onNavbarClick('contact');
        }}
      >
        Contact
      </a>
      |
      <a
        href="resume"
        className={currentSection === 'resume' ? 'active' : ''}
        onClick={(event) => {
          event.preventDefault();
          onNavbarClick('resume');
        }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;