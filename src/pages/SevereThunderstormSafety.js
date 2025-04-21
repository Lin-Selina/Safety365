import React from 'react';
import '../App.css';
import Header from '../components/Header';

function SevereThunderstormSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Severe Thunderstorm Safety</h1>
      <p>
        Severe storms can bring lightning, strong winds, hail, and flash flooding. Preparation and awareness are key to staying safe.
        Below are important steps to take before, during, and after a thunderstorm.
      </p>

      <div className="storm-box">
        <h2>Before the Storm</h2>
        <p>Secure any loose outdoor items like furniture, umbrellas, and bikes to prevent them from becoming dangerous projectiles.</p>
        <p>Make sure your phone and any portable chargers are fully charged in case of a power outage.</p>
        <p>Stay updated by monitoring local weather alerts through apps, radio, or NOAA alerts.</p>
        <p>Understand the alerts: a Severe Thunderstorm Watch means conditions are possible, while a Warning means a storm is occurring or imminent.</p>
        <p>Close all windows, doors, and blinds to minimize damage from high winds and flying debris.</p>
        <p>Assemble an emergency kit with essentials such as water, flashlight, batteries, snacks, and first aid supplies.</p>
      </div>

      <div className="storm-box">
        <h2>During the Storm</h2>
        <p>Stay indoors and keep away from windows and glass doors for your safety.</p>
        <p>Avoid using electrical appliances and corded phones, as lightning can travel through wires.</p>
        <p>If you have time, unplug sensitive electronics to protect them from surges.</p>
        <p>Remain off balconies, porches, and out of open garages during the storm.</p>
        <p>If you’re caught outside, steer clear of tall objects like trees or poles and seek shelter in a sturdy building or enclosed vehicle.</p>
        <p>Never drive through flooded roads. It only takes a small amount of water to stall or carry away a vehicle.</p>
      </div>

      <div className="storm-box">
        <h2>After the Storm</h2>
        <p>Wait for official confirmation that the storm has passed before going outside.</p>
        <p>Be cautious of fallen power lines, broken glass, or other debris that could cause injury.</p>
        <p>Avoid standing water, as it could be contaminated or electrically charged from downed power lines.</p>
        <p>Report any hazardous conditions like downed wires or blocked roads to local authorities immediately.</p>
        <p>If safe, check in on neighbors—especially the elderly or those with mobility issues.</p>
      </div>

      <div className="storm-box">
        <h2>Emergency Contacts</h2>
        <p>For life-threatening emergencies, call 911 right away.</p>
        <p>You can reach UF Emergency Management at <strong>(352) 273-2100</strong>.</p>
        <p>Sign up for UF emergency alerts and notifications at <a href="https://ufalert.ufl.edu" target="_blank" rel="noreferrer">ufalert.ufl.edu</a>.</p>
      </div>
    </div>
  );
}

export default SevereThunderstormSafety;
