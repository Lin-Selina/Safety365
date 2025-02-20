import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Welcome() {
  const navigate = useNavigate();

  const handleGuestClick = () => {
    navigate('/home'); 
  };

  const handleSignInClick = () => {
    navigate('/gatorlink'); 
  };

  return (
    <div className="blank-page">
      <Header />
      {/* Banner Section */}
      <div className="welcome-banner">
        <h1 className="welcome-heading">We make safety as a priority at the University of Florida!</h1>
        <div className="welcome-buttons">
          <button className="welcome-button" onClick={handleGuestClick}>Use As Guest</button>
          <button className="nav-button" onClick={handleSignInClick}>Sign in using GatorLink</button>
        </div>
      </div>
      {/* Paragraphs */}
      <p className="welcome-paragraph1">Obtain step-by-step guides for emergency situations</p>
      <p className="welcome-paragraph2">Access safety resources provided by UF and curated by our team</p>
      <p className="welcome-paragraph3">Find assistance for health, legal, counseling and academic support</p>
      <p className="welcome-paragraph4">Get training on various campus measures to be prepared for dangers</p>
    </div>
  );
}

export default Welcome;
