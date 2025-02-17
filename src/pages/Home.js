import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Home() {
  return (
    <div className="app-container">
      <Header />
      <header className="home-header">
        <h1>Welcome to Safety635</h1>
        <p>Your one-stop platform for safety and protection.</p>
        <Link to="/resources">
          <button className="explore-button">Explore Safety Resources</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
