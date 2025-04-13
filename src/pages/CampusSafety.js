import React from 'react';
import '../App.css';
import Header from '../components/Header';

function CampusSafety() {
  return (
    <div className="blank-page">
      <Header />
      <h1>🏫 Campus Safety</h1>
      <p>
        At the University of Florida, student safety is a top priority. By staying aware, using campus resources, and taking a few basic precautions,
        you can help ensure a safe experience for yourself and others.
      </p>

      <div className="campus-box">
        <h2>🚶 Walking on Campus</h2>
        <p>Stay aware of your surroundings, especially at night. Stick to well-lit walkways and avoid secluded areas. Walk with friends when possible, and always trust your instincts. If something feels off, don’t ignore it. You can request a ride from the Student Nighttime Auxiliary Patrol (SNAP) for safe transportation after dark.</p>
      </div>

      <div className="campus-box">
        <h2>📱 Emergency Alerts</h2>
        <p>Sign up for UF Alerts through the <a href="https://ufalert.ufl.edu/">UF Alert System</a> to stay informed of any emergencies or safety announcements. These alerts are timely and can be critical in emergencies.</p>
      </div>

      <div className="campus-box">
        <h2>🛑 Reporting Suspicious Activity</h2>
        <p>Report anything suspicious to the University Police Department (UPD), available 24/7 at <strong>(352) 392-1111</strong>. If you'd prefer to remain anonymous, use their Silent Witness tool here: <a href="https://police.ufl.edu/contact/silent-witness/">Submit a Tip</a>.</p>
      </div>

      <div className="campus-box">
        <h2>🚗 Safe Transportation</h2>
        <p>Use SNAP, RTS buses, or campus shuttles instead of walking alone or getting into unknown vehicles. Always double-check your rideshare driver’s name, vehicle, and license plate before getting in. For SNAP hours and service areas, visit the <a href="https://taps.ufl.edu/alternative-transportation/snap/">SNAP Information Page</a>.</p>
      </div>

      <div className="campus-box">
        <h2>📚 Resources for Victims</h2>
        <p>If you or someone you know experiences harassment, violence, or assault, confidential support is available through the UF Counseling and Wellness Center, U Matter We Care, and the Office of Title IX. You can access resources here: <a href="https://studentsuccess.ufl.edu/student-resources/resourceguide/safety/">UF Safety Resources</a>.</p>
      </div>

      <div className="campus-box">
        <h2>✅ Be Proactive</h2>
        <p>Know where emergency blue light phones are located across campus. Keep your phone charged and share your class or study schedule with a trusted friend. Being proactive can help prevent and respond to emergencies more effectively.</p>
      </div>

      <p>Stay alert, stay informed, and don’t hesitate to use the many resources UF provides to help you stay safe on campus.</p>
    </div>
  );
}

export default CampusSafety;
