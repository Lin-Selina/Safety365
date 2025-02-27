import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; 

function Header() {
  const location = useLocation(); 

  return (
    <nav className="header">
      <Link to="/" className="logo">Safety365</Link> {/* Clickable Logo */}
      <div className="nav-buttons">
        {location.pathname !== '/' && ( // display Home button only if not on Welcome page
          <Link to="/home"><button className="nav-button">Home</button></Link>
        )}
        <Link to="/faq"><button className="nav-button">FAQ</button></Link>
        <Link to="/support"><button className="nav-button">Support</button></Link>
      </div>
    </nav>
  );
}

export default Header;
