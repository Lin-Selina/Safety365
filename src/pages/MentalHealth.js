import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function MentalHealth() {
  const navigate = useNavigate();
  const gridItems = [
    {
      title: "Mental Health Tracker",
      description: "Use our tools to track your mental health and create a wellness plan.",
      image: "/mental health tracker.png",
      path: "/mental-health-tracker"
    },
    {
      title: "Recognizing Mental Health Issues",
      description: "Learn about common mental health issues and how to recognize the signs. TRIGGER WARNING: This page contains sensitive content.",
      image: "/mental issues.png",
      path: "/mental-health-issues"
    }
  ];

  return (
    <div className="blank-page">
      <Header />
      <h1>Mental Health Resources</h1>
      
      <div className="welcome-grid">
        {gridItems.map((item, index) => (
          <div 
          className="grid-item" 
          key={index}
          onClick={() => navigate(item.path)} 
          style={{ cursor: "pointer" }}>
            <img src={item.image} alt={item.title} className="grid-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <p>If you need immediate support, please call 911 or reach out to a crisis helpline.</p>
    </div>
  );
}

export default MentalHealth;
