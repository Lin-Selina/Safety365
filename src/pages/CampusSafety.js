import React from 'react';
import '../App.css';
import Header from '../components/Header';

function CampusSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Campus Safety</h1>
      <p>At the University of Florida, student safety is a top priority. By staying aware, using campus resources, and taking a few basic precautions, you can help ensure a safe experience for yourself and others.</p>

      <h2>🚶 Walking on Campus</h2>
      <p>Always be aware of your surroundings, especially at night. Stick to well-lit paths and avoid isolated areas. Walk with friends when possible, and trust your instincts — if something feels off, don’t ignore it. You can also use the SNAP (Student Nighttime Auxiliary Patrol) service for safe transportation around campus after dark.</p>

      <h2>📱 Emergency Alerts</h2>
      <p>Make sure you're signed up for UF Alerts through the <a href="https://ufalert.ufl.edu/">UF Alert system</a>. These notifications will keep you informed of emergencies and important safety updates.</p>

      <h2>🛑 Reporting Suspicious Activity</h2>
      <p>If you see something suspicious, report it immediately to the University Police Department (UPD). You can reach them 24/7 at (352) 392-1111. For non-emergency tips, use their anonymous reporting system here: <a href="https://police.ufl.edu/contact/silent-witness/">Submit a Tip</a>.</p>

      <h2>🚗 Safe Transportation</h2>
      <p>Use official UF transportation services like SNAP, RTS buses, and campus shuttles. Avoid getting into unmarked vehicles, and always double-check rideshare information before entering a car. For SNAP hours and service areas, check: <a href="https://taps.ufl.edu/alternative-transportation/snap/">SNAP Information Page</a>.</p>

      <h2>📚 Resources for Victims</h2>
      <p>If you or someone you know has experienced harassment, violence, or assault, confidential support is available through the UF Counseling and Wellness Center, U Matter We Care, and the Office of Title IX. Visit this link for more information: <a href="https://studentsuccess.ufl.edu/student-resources/resourceguide/safety/">UF Safety Resources</a> {/* TODO: Replace with actual URL */}</p>

      <h2>✅ Be Proactive</h2>
      <p>Know where the emergency blue light phones are located on campus, keep your phone charged, and share your class or study schedules with a trusted friend. The more you plan ahead, the more prepared you’ll be in any situation.</p>

      <p>Stay alert, stay informed, and don’t hesitate to use the many resources UF provides to help you stay safe on campus.</p>
    </div>
  );
}

export default CampusSafety;
