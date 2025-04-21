import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function NaturalDisasters() {
  const navigate = useNavigate();
  const gridItems = [
    {
      title: "Tornado Safety",
      description: "Learn how to stay safe during a tornado and what to do before, during, and after one.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
      path: "/tornado-safety"
    },
    {
      title: "Hurricane Preparedness",
      description: "Get tips on how to prepare for hurricanes and what to do during one.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      path: "/hurricane-preparedness"
    },
    {
      title: "Severe Thunderstorm Safety",
      description: "Understand the risks of severe thunderstorms and how to protect yourself.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      path: "/severe-thunderstorm-safety"
    },
    {
      title: "Flood Safety",
      description: "Learn how to stay safe during floods and what to do before, during, and after one.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      path: "/flood-safety"
    },
    {
      title: "Wildfire Safety",
      description: "Get tips on how to prepare for wildfires and what to do during one.",
      image: "https://ih1.redbubble.net/image.3880118575.6668/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      path: "/wildfire-safety"
    }
  ];

  return (
    <div className="blank-page">
      <Header />
      <h1>Natural Disasters Resources</h1>
      <p>Natural disasters can strike unexpectedly, and it's important to be prepared. Here are common disaster scenarios students at the University of Florida may face, along with guidance on how to react safely:</p>
      
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
      <h2>Stay Informed</h2>
      <p>Always monitor GatorSafe, UF Alerts, or the National Weather Service for real-time updates. Pay attention to instructions from campus safety officials, and have a plan in place with your roommates or friends in case you’re separated during an emergency.</p>

      <p>Preparedness is key. Take a few minutes to review emergency routes in your dorm or apartment and make sure you know how to get emergency alerts from UF.</p>
    </div>
  );
}

export default NaturalDisasters;
