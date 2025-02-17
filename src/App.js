import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Gatorlink from './pages/Gatorlink'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/gatorlink" element={<Gatorlink />} />
      </Routes>
    </Router>
  );
}

export default App;
