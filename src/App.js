import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components for the pages
function Home() {
  return (
    <div className="app-container">
      <header className="welcome-header">
        <h1>Welcome to Safety635</h1>
        <p>Your one-stop platform for safety and protection.</p>
        <Link to="/resources">
          <button className="explore-button">Explore Safety Resources</button>
        </Link>
      </header>
    </div>
  );
}

function Resources() {
  return (
    <div className="app-container">
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
