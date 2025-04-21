import React from 'react';
import '../App.css';
import Header from '../components/Header';

function TornadoSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Tornado Safety</h1>
      <p>
        Tornadoes are violent windstorms that can cause severe damage within minutes. Quick thinking and proper shelter can save lives.
        Here's how to prepare and stay safe before, during, and after a tornado.
      </p>

      <div className="tornado-box">
        <h2>Before the Tornado</h2>
        <p>Sign up for weather alerts and be familiar with tornado watch versus tornado warning — a watch means conditions are possible, while a warning means a tornado has been spotted or detected by radar.</p>
        <p>Identify the safest place in your residence or building, ideally a basement, interior hallway, or bathroom with no windows.</p>
        <p>Prepare an emergency kit with essentials like water, snacks, flashlight, batteries, and a first aid kit.</p>
        <p>Practice tornado drills so you and others know where to go and how quickly you can get there.</p>
      </div>

      <div className="tornado-box">
        <h2>During the Tornado</h2>
        <p>If a tornado warning is issued, move immediately to your designated safe area. This should be on the lowest floor in an interior room or hallway, away from windows and doors.</p>
        <p>Avoid elevators and stay out of large, open rooms like gyms or auditoriums.</p>
        <p>Protect your head and neck using a heavy blanket, mattress, or even a backpack if available.</p>
        <p>Stay in place until officials confirm that the danger has passed. Do not go outside to check until it is safe.</p>
      </div>

      <div className="tornado-box">
        <h2>After the Tornado</h2>
        <p>Check yourself and others for injuries and apply first aid as needed.</p>
        <p>Exit damaged buildings cautiously, watching for debris, exposed nails, or unstable structures.</p>
        <p>Avoid downed power lines and report them immediately to authorities.</p>
        <p>Continue to monitor official alerts, as additional storms may follow.</p>
      </div>

      <div className="tornado-box">
        <h2>Emergency Response</h2>
        <p>Call 911 immediately in the event of injuries or life-threatening situations.</p>
        <p>Report damage or emergencies on campus to UF Emergency Management at <strong>(352) 273-2100</strong>.</p>
        <p>Sign up for tornado alerts and other weather notifications at <a href="https://ufalert.ufl.edu" target="_blank" rel="noreferrer">ufalert.ufl.edu</a>.</p>
      </div>
    </div>
  );
}

export default TornadoSafety;
