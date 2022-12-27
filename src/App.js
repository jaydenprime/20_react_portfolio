import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';


import AboutMe from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';

class App extends React.Component {
  state = {
    currentSection: 'about-me',
  };

  handleNavbarClick = (section) => {
    this.setState({ currentSection: section });
  };

  render() {
    const { currentSection } = this.state;

    return (
      <div>
        <Header>
          <Navbar
            currentSection={currentSection}
            onNavbarClick={this.handleNavbarClick}
          />
        </Header>
        {currentSection === 'about-me' && <AboutMe />}
        {currentSection === 'portfolio' && <Portfolio />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'resume' && <Resume />}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App
