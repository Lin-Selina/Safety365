import React from 'react';
import '../App.css';
import Header from '../components/Header';

function WildfireSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>🔥 Wildfire Safety (Less Common but Possible)</h1>
      <p>
        While wildfires are rare in Florida, nearby states or regional wind patterns can result in poor air quality due to drifting smoke.
        It’s important to understand how to protect your health and safety when smoke is in the area.
      </p>

      <div className="wildfire-box">
        <h2>📋 Before Smoke Exposure</h2>
        <p>Monitor local news and air quality indexes through websites like <a href="https://www.airnow.gov" target="_blank" rel="noreferrer">AirNow.gov</a>.</p>
        <p>If you have respiratory conditions such as asthma or allergies, make sure medications are up-to-date and easily accessible.</p>
        <p>Check that your indoor air filters are clean and functioning. Consider using HEPA air purifiers in common areas.</p>
        <p>Keep a supply of N95 or KN95 masks on hand in case you need to go outside during heavy smoke events.</p>
      </div>

      <div className="wildfire-box">
        <h2>🏠 During Smoke Conditions</h2>
        <p>Stay indoors with windows and doors shut tightly. Use air conditioning in recirculate mode if available.</p>
        <p>Avoid physical activities outdoors, especially exercise or heavy exertion.</p>
        <p>Use air purifiers or portable fans with filters to improve indoor air quality.</p>
        <p>Drink plenty of water to stay hydrated and help your body filter out airborne particles.</p>
        <p>If you must go outside, wear a fitted N95/KN95 mask to reduce smoke inhalation.</p>
      </div>

      <div className="wildfire-box">
        <h2>✅ After Smoke Clears</h2>
        <p>Open windows and doors to ventilate your living space once air quality has returned to safe levels.</p>
        <p>Clean surfaces where smoke particles may have settled, especially near windows and door frames.</p>
        <p>Replace any HVAC or portable air filters that may have been affected during the event.</p>
        <p>Pay attention to lingering health symptoms such as coughing or shortness of breath, and consult a medical professional if needed.</p>
      </div>

      <div className="wildfire-box">
        <h2>📞 Emergency Response</h2>
        <p>For breathing difficulties or signs of smoke-related illness, seek medical attention or call 911.</p>
        <p>Contact campus health services for non-emergency concerns related to respiratory symptoms.</p>
        <p>Stay updated with official alerts through <a href="https://ufalert.ufl.edu" target="_blank" rel="noreferrer">ufalert.ufl.edu</a> and local emergency channels.</p>
      </div>
    </div>
  );
}

export default WildfireSafety;
