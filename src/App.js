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
import Medical from './pages/Medical Emergency';
import Mental from './pages/Mental Health';
import Safety from './pages/Safety';
import Natural from './pages/Natural Disaster';
import Fire from './pages/Fire Safety';
import Campus from './pages/Campus Safety';
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
        <Route path="/medical" element={<Medical />} />
        <Route path="/mental" element={<Mental />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/natural" element={<Natural />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/campus" element={<Campus />} />
      </Routes>
    </Router>
  );
}

export default App;
