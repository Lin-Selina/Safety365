import React from 'react';
import '../App.css';
import Header from '../components/Header';

function FireSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Fire Safety</h1>
      <p>If you are ever in a fire situation, follow these steps to maximize your safety:</p>

      <h2>🔥 What to Do During a Fire:</h2>
      <p><strong>Stay Calm:</strong> Try to remain as calm as possible so you can think clearly.</p>
      <p><strong>Activate the Fire Alarm:</strong> If one is available and hasn’t been triggered, pull the alarm.</p>
      <p><strong>Call 911:</strong> Provide your location and details of the fire if it's safe to do so.</p>
      <p><strong>Evacuate Immediately:</strong> Leave the building quickly. Don’t try to gather personal belongings.</p>
      <p><strong>Use Stairs, Not Elevators:</strong> Elevators can become inoperative or unsafe during fires.</p>
      <p><strong>Feel Doors Before Opening:</strong> If the door is hot, do not open it — fire may be on the other side.</p>
      <p><strong>Stay Low:</strong> Smoke rises, so crawl on your hands and knees to avoid inhaling it.</p>
      <p><strong>Cover Your Nose and Mouth:</strong> Use a cloth (wet if possible) to reduce smoke inhalation.</p>
      <p><strong>If Trapped:</strong> Seal cracks around the door with clothes or towels, signal from a window, and call for help.</p>

      <h2>✅ Once You're Out:</h2>
      <p>Go to your designated assembly point and wait for further instructions. Don’t go back inside for any reason until emergency services give the all-clear. If you know someone is still inside or you’re missing a pet, report it to firefighters immediately.</p>

      <p>Staying prepared and informed can save lives. Familiarize yourself with your building’s fire exits and emergency procedures.</p>
    </div>
  );
}

export default FireSafety;
