import React from 'react';
import '../App.css';
import Header from '../components/Header';

function FloodSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Flood Safety</h1>
      <p>
        Heavy rainfall can lead to flash flooding, especially in low-lying areas. Being prepared and knowing how to respond can
        help keep you and others safe. Below are important steps to follow before, during, and after a flood.
      </p>

      <div className="flood-box">
        <h2>Before the Flood</h2>
        <p>Stay informed by checking weather apps and local news for flood watches and warnings in your area.</p>
        <p>Know your campus or building's evacuation routes and identify higher ground nearby where you can take shelter.</p>
        <p>Prepare an emergency kit with bottled water, a flashlight, first aid supplies, a battery-powered radio, and non-perishable food.</p>
        <p>Move valuables, important documents, and electronics to higher shelves or elevated areas if flooding is predicted.</p>
      </div>

      <div className="flood-box">
        <h2>During the Flood</h2>
        <p>Do not walk, swim, or drive through floodwaters — even shallow water can sweep you off your feet or stall your vehicle.</p>
        <p>Move immediately to higher ground if there’s a flood warning or if water is rising near you.</p>
        <p>Avoid touching electrical equipment if you are wet or standing in water.</p>
        <p>Stay inside if it is safe and avoid windows. If ordered to evacuate, follow instructions immediately.</p>
        <p>Use a battery-powered radio or phone to monitor emergency alerts and weather updates.</p>
      </div>

      <div className="flood-box">
        <h2>After the Flood</h2>
        <p>Stay away from standing water, which may be contaminated or electrically charged from downed power lines.</p>
        <p>Do not return to flooded buildings until local officials declare them safe.</p>
        <p>Check for structural damage before entering any building, and report it if necessary.</p>
        <p>Take photos of any damage for insurance or emergency reports.</p>
        <p>Wash your hands frequently and disinfect surfaces if you've come in contact with floodwater.</p>
      </div>

      <div className="flood-box">
        <h2>Emergency Response</h2>
        <p>If you’re on campus and see active flooding, contact facilities or campus emergency services immediately.</p>
        <p>For life-threatening emergencies, call 911 without delay.</p>
        <p>Sign up for campus alerts at <a href="https://ufalert.ufl.edu" target="_blank" rel="noreferrer">ufalert.ufl.edu</a> to stay informed in real time.</p>
      </div>
    </div>
  );
}

export default FloodSafety;
