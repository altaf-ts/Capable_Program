// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="https://capabl.in/">
          <img src="capabl-logo.png" alt="Capabl Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="https://shorturl.at/VMg4S" className="white-link">Become a campus ambassador</a></li>
          <li><a href="https://shorturl.at/xz6nb">Host TechfusionX at your campus</a></li>
          
          {/* Update the link to navigate to the programs section */}
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/programs">Programs</Link></li>  
          
          <li>Experts</li>

          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;