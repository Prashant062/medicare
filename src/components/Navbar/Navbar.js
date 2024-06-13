import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ showButton }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{zIndex:'1'}}>
        Medi<span className="highlight" >Care+</span>
      </div>
      <div className="navbar-right">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#news" className="nav-link">News</a>
      </div>
      {showButton && (
        <div className="navbar-button">
          <button>Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
