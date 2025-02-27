import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Home() {
  return (
    <div className="app-container">
      <Header />
      <header className="home-header">
        <h1>Welcome to Safety365</h1>
        <p>Your one-stop platform for safety and protection.</p>
      </header>
      {/* Grid Layout */}
      <div className="grid-container">
        <Link to="/medical-emergency" className="grid-box">Medical Emergencies</Link>
        <Link to="/mental-health" className="grid-box">Mental Health</Link>
        <Link to="/active-threats" className="grid-box">Active Threats</Link>
        <Link to="/natural-disasters" className="grid-box">Natural Disasters</Link>
        <Link to="/fire-safety" className="grid-box">Fire Safety</Link>
        <Link to="/campus-safety" className="grid-box">Campus Safety & Resources</Link>
      </div>
    </div>
  );
}

export default Home;
