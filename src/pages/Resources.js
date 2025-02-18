import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Resources() {
  return (
    <div className="app-container">
      <Header />
      <header className="welcome-header">
        <h1>Safety Resources</h1>
        <p>Here are some emergency contacts you can reach out to:</p>
        <ul className="resources-list">
          <li>Police Department: (555) 123-4567</li>
          <li>Fire Department: (555) 987-6543</li>
          <li>Medical Emergency: 911</li>
          <li>Disaster Helpline: (555) 333-4444</li>
        </ul>
        <Link to="/">
          <button className="back-button">Go Back Home</button>
        </Link>
      </header>
    </div>
  );
}

export default Resources;
