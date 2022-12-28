import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';


import AboutMe from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';

function App() {
  const [currentSection, setCurrentSection] = useState('about-me');

  const handleNavbarClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <section>
    <div>
      <Header>
        <Navbar
          currentSection={currentSection}
          onNavbarClick={handleNavbarClick}
        />
      </Header>
      {currentSection === 'about-me' && <AboutMe />}
      {currentSection === 'portfolio' && <Portfolio />}
      {currentSection === 'contact' && <Contact />}
      {currentSection === 'resume' && <Resume />}
      <Footer />
    </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;