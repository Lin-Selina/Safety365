import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Header Component
function Header() {
  return (
    <nav className="header">
      <Link to="/" className="logo">Safety635</Link> {/* Clickable Logo */}
      <div className="nav-buttons">
        <Link to="/about"><button className="nav-button">About</button></Link>
        <Link to="/contact"><button className="nav-button">Contact</button></Link>
        <Link to="/faq"><button className="nav-button">FAQ</button></Link>
        <Link to="/support"><button className="nav-button">Support</button></Link>
      </div>
    </nav>
  );
}

// Home Page
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

// Resources Page
function Resources() {
  return (
    <div className="app-container">
      <header className="welcome-header">
        <h1>Safety Resources</h1>
        <p>Here are some emergency contacts you can reach out to:</p>
        <ul className="resources-list">
          <li>Police Department: (555) 123-4567</li>
          <li>Fire Department: (555) 987-6543</li>
          <li>Medical Emergency: (555) 111-2222</li>
          <li>Disaster Helpline: (555) 333-4444</li>
        </ul>
        <Link to="/">
          <button className="back-button">Go Back Home</button>
        </Link>
      </header>
    </div>
  );
}

// Blank Pages for Navigation
function About() {
  return <div className="blank-page"><h1>About Us</h1><p>Page under construction.</p></div>;
}

function Contact() {
  return <div className="blank-page"><h1>Contact</h1><p>Page under construction.</p></div>;
}

function FAQ() {
  return <div className="blank-page"><h1>FAQ</h1><p>Page under construction.</p></div>;
}

function Support() {
  return <div className="blank-page"><h1>Support</h1><p>Page under construction.</p></div>;
}

// App Component with Routes and Header at the Top
function App() {
  return (
    <Router>
      <Header /> {/* Header remains fixed at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
