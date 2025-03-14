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
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" // Replace with actual image URL
    },
    {
      title: "Safety Resources",
      description: "Access UF safety resources curated by our team.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
      title: "Support Services",
      description: "Find health, legal, counseling, and academic support.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
      title: "Training Programs",
      description: "Get training on campus safety measures.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    }
  ];

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
      {/* Grid Layout */}
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

