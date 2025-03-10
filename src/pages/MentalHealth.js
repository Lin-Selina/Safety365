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
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
      path: "/mental-health-tracker"
    },
    {
      title: "Blah Blah Blah",
      description: "Blah Blah Blah",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
      title: "Blah Blah Blah",
      description: "Blah Blah Blah",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
      title: "Blah Blah Blah",
      description: "Blah Blah Blah",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
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
          onClick={() => navigate(item.path)} // Navigate on click
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
