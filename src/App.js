import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Gatorlink from './pages/Gatorlink'; 
import MedicalEmergency from './pages/MedicalEmergency';
import MentalHealth from './pages/MentalHealth';
import ActiveThreats from './pages/ActiveThreats';
import NaturalDisasters from './pages/NaturalDisasters';
import FireSafety from './pages/FireSafety';
import CampusSafety from './pages/CampusSafety';
import Signup from './pages/Signup';
import MentalHealthTracker from './pages/MentalHealthTracker';
import TornadoSafety from './pages/TornadoSafety';
import HurricanePreparedness from './pages/HurricanePreparedness';
import SevereThunderstormSafety from './pages/SevereThunderstormSafety';
import FloodSafety from './pages/FloodSafety';
import WildfireSafety from './pages/WildfireSafety';
import FireTips from './pages/FireTips';
import OnCampusFire from './pages/OnCampusFire';
import MentalHealthIssues from './pages/MentalHealthIssues';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/gatorlink" element={<Gatorlink />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/medical-emergency" element={<MedicalEmergency />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/active-threats" element={<ActiveThreats />} />
        <Route path="/natural-disasters" element={<NaturalDisasters />} />
        <Route path="/fire-safety" element={<FireSafety />} />
        <Route path="/campus-safety" element={<CampusSafety />} />
        <Route path="/mental-health-tracker" element={<MentalHealthTracker />} />
        <Route path="/tornado-safety" element={<TornadoSafety />} />
        <Route path="/hurricane-preparedness" element={<HurricanePreparedness />} />
        <Route path="/severe-thunderstorm-safety" element={<SevereThunderstormSafety />} />
        <Route path="/flood-safety" element={<FloodSafety />} />
        <Route path="/wildfire-safety" element={<WildfireSafety />} />
        <Route path="/fire-tips" element={<FireTips />} />
        <Route path="/on-campus-fire" element={<OnCampusFire />} />
        <Route path="/mental-health-issues" element={<MentalHealthIssues />} />
      </Routes>
    </Router>
  );
}

export default App;
