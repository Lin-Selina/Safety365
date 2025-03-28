import React from 'react';
import '../App.css';
import Header from '../components/Header';

function NaturalDisasters() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Natural Disasters</h1>
      <p>Natural disasters can strike unexpectedly, and it's important to be prepared. Here are common disaster scenarios students at the University of Florida may face, along with guidance on how to react safely:</p>

      <h2>🌪️ Tornadoes</h2>
      <p>If a tornado warning is issued, seek shelter immediately in the lowest level of the building you're in — ideally in an interior room or hallway away from windows. Avoid elevators and stay away from doors and glass. Cover your head and neck to protect yourself from debris.</p>

      <h2>🌀 Hurricanes</h2>
      <p>During hurricane season (June to November), monitor local weather alerts and university communications. If a hurricane is approaching, stock up on water, non-perishable food, medications, and flashlights. Follow evacuation orders if issued. If sheltering in place, stay indoors and away from windows. Have an emergency kit and charge all devices in advance.</p>

      <h2>⚡ Severe Thunderstorms</h2>
      <p>Severe storms can bring lightning, strong winds, and flooding. Stay indoors and avoid using electrical appliances. Do not go outside unless absolutely necessary. If you’re caught outside, avoid trees and tall structures, and seek shelter in a sturdy building.</p>

      <h2>🌊 Flooding</h2>
      <p>Heavy rainfall can lead to flash flooding, especially in low-lying areas. Never walk or drive through flooded roads — “Turn Around, Don’t Drown.” Move to higher ground and monitor alerts from local authorities. Report flooding on campus to facilities or emergency services.</p>

      <h2>🔥 Wildfires (Less Common but Possible)</h2>
      <p>If air quality alerts are issued due to wildfire smoke, stay indoors, keep windows closed, and use air purifiers if available. Avoid outdoor exercise and seek medical help if you experience difficulty breathing.</p>

      <h2>📢 Stay Informed</h2>
      <p>Always monitor GatorSafe, UF Alerts, or the National Weather Service for real-time updates. Pay attention to instructions from campus safety officials, and have a plan in place with your roommates or friends in case you’re separated during an emergency.</p>

      <p>Preparedness is key. Take a few minutes to review emergency routes in your dorm or apartment and make sure you know how to get emergency alerts from UF.</p>
    </div>
  );
}

export default NaturalDisasters;
