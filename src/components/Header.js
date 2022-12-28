import React from 'react';
import '../App.css';

function Header({ children }) {
  return (
    <header>
      <h1>Jayden Trinh</h1>
      {children}
    </header>
  );
}

export default Header;