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

  const gridItems = [
    {
      title: "Emergency Guides",
      description: "Obtain step-by-step guides for emergency situations.",
      image: "/emergency.png"
    },
    {
      title: "Safety Resources",
      description: "Access UF safety resources curated by our team.",
      image: "/safety resources.png"
    },
    {
      title: "Support Services",
      description: "Find health, legal, counseling, and academic support.",
      image: "/support services.png"
    },
    {
      title: "Training Programs",
      description: "Get training on campus safety measures.",
      image: "/training programs.png"
    }
  ];

  return (
    <div className="blank-page">
      <Header />
   
      <div className="welcome-banner">
        <h1 className="welcome-heading">We make safety a priority at the University of Florida!</h1>
        <div className="welcome-buttons">
          <button className="welcome-button" onClick={handleGuestClick}>Use As Guest</button>
          <button className="nav-button" onClick={handleSignInClick}>Sign in using GatorLink</button>
        </div>
      </div>

      <div className="welcome-grid">
        {gridItems.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.image} alt={item.title} className="grid-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <p>If this is an emergency, please call 911.</p>
    
    
    </div>
  );
}

export default Welcome;

