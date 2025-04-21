import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';

function FireTips() {

  return (
    <div className="blank-page">
      
      <Header />
      
      <h1>🔥 Fire Safety</h1>
      <p>
        Fires can escalate quickly. Understanding what to do in the moment can make all the difference.
        Follow the steps below to stay safe during a fire emergency.
      </p>

      <div className="fire-box">
        <h2>🚨 What to Do During a Fire</h2>
        <p>Stay as calm as possible. A clear mind will help you make smart decisions quickly.</p>
        <p>If a fire alarm hasn’t been triggered, pull it to alert others in the building.</p>
        <p>Call 911 when it's safe to do so. Provide your exact location and details about the fire.</p>
        <p>Evacuate the building immediately. Leave belongings behind and focus on getting out safely.</p>
        <p>Always use stairs instead of elevators. Elevators may stop working or become dangerous during fires.</p>
        <p>Feel doors with the back of your hand before opening them. If a door is hot, do not open it — fire may be on the other side.</p>
        <p>Stay low to the ground to avoid smoke inhalation. Crawl if necessary to breathe cleaner air near the floor.</p>
        <p>Cover your nose and mouth with a cloth, preferably wet, to reduce smoke exposure while exiting.</p>
        <p>If you're trapped inside, seal cracks around the door with clothing or towels to block smoke. Signal for help from a window and call 911 again if possible.</p>
      </div>

      <div className="fire-box">
        <h2>✅ After You've Evacuated</h2>
        <p>Go directly to your building’s designated assembly point and stay there until emergency personnel say it’s safe to leave.</p>
        <p>Do not re-enter the building under any circumstance until given official clearance.</p>
        <p>If someone is unaccounted for or you believe a pet is still inside, immediately inform the firefighters or emergency services.</p>
      </div>

      <div className="fire-box">
        <h2>📋 Stay Prepared</h2>
        <p>Know the location of all fire exits and alarms in your building.</p>
        <p>Review your residence or facility's evacuation plan regularly.</p>
        <p>Keep your phone charged and your shoes and essentials near your bed in case of a nighttime fire.</p>
      </div>
    </div>
  );
}

export default FireTips;
