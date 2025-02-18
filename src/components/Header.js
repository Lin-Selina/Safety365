import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="logo">Safety365</Link> {/* Clickable Logo */}
      <div className="nav-buttons">
        <Link to="/about"><button className="nav-button">About</button></Link>
        <Link to="/contact"><button className="nav-button">Contact</button></Link>
        <Link to="/faq"><button className="nav-button">FAQ</button></Link>
        <Link to="/support"><button className="nav-button">Support</button></Link>
      </div>
    </nav>
  );
}

export default Header;
