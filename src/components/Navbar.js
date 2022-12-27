import React from 'react';
import '../App.css'

const Navbar = ({ currentSection, onNavbarClick }) =>  {
    return(
        <nav>
        <a
          href="aboutme"
          className={currentSection === 'about-me' ? 'active' : ''}
          onClick={() => onNavbarClick('about-me')}
        >
          About Me
        </a>
        <a
          href="portfolio"
          className={currentSection === 'portfolio' ? 'active' : ''}
          onClick={() => onNavbarClick('portfolio')}
        >
          Portfolio
        </a>
        <a
          href="contact"
          className={currentSection === 'contact' ? 'active' : ''}
          onClick={() => onNavbarClick('contact')}
        >
          Contact
        </a>
        <a
          href="resume"
          className={currentSection === 'resume' ? 'active' : ''}
          onClick={() => onNavbarClick('resume')}
        >
          Resume
        </a>
      </nav>
  
    )
}
    



export default Navbar