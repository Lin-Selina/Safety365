import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function FireSafety() {
  const navigate = useNavigate();
  const gridItems = [
    {
      title: "General Tips for Fire Safety",
      description: "Learn the basics of fire safety and prevention.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
      path: "/fire-tips"
    },
    {
      title: "On-Campus Housing Fire Safety",
      description: "Learn about fire safety protocols in your dormitory.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      path: "/on-campus-fire"
    }
  ];

  return (
    <div className="blank-page">
      <Header />
      <h1>Fire Safety Resources</h1>
      
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

      <p>If you need immediate support, please call 911.</p>
    </div>
  );
}

export default FireSafety;
