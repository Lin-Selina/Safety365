import React from 'react';
import '../App.css';
import Header from '../components/Header';

function MedicalEmergency() {
  return (
    <div className="medical-page">
      <Header />
      <h1>Medical Emergency</h1>
      <p className="medical-intro">
      Medical emergencies can happen unexpectedly. It's important to stay calm, act quickly, and know what steps to take. Below are common situations and how to respond.
      </p>

      <div className="accordion-item">
        <h2>🚑 Alcohol Poisoning</h2>
        <p>
        Signs include vomiting, irregular breathing, or pale/blue-tinged skin. Call 911 immediately. Turn the person on their side and don’t leave them alone.
        </p>
      </div>

      <div className="accordion-item">
        <h2>🧠 Concussions</h2>
        <p>
        Watch for dizziness, confusion, or nausea after a head injury. Stop all activity and seek medical attention. Monitor symptoms closely.
        </p>
      </div>

      <div className="accordion-item">
        <h2>❤️ Panic or Anxiety Attacks</h2>
        <p>
          Symptoms may include chest pain, shortness of breath, rapid heartbeat, or a feeling of impending doom. Help the person
          sit down, take slow deep breaths, and reassure them they are safe. Encourage them to seek counseling or support services afterward.
        </p>
      </div>

      <div className="accordion-item">
        <h2>💉 Severe Allergic Reactions (Anaphylaxis)</h2>
        <p>
          If someone is experiencing swelling, difficulty breathing, or a rapid drop in blood pressure after eating or being
          exposed to a known allergen, use an epinephrine auto-injector (EpiPen) if available and call 911 immediately. Do not delay.
        </p>
      </div>

      <div className="accordion-item">
        <h2>🔥 Burns</h2>
        <p>
          For minor burns, cool the area under running water and cover it with a clean cloth. For more severe burns, do not apply
          ointments—call 911 and cover the area with a cool, moist cloth while waiting for help.
        </p>
      </div>

      <div className="accordion-item">
        <h2>🫀 Fainting</h2>
        <p>
          If someone faints, check for breathing and responsiveness. If they’re breathing, lay them on their back and elevate
          their legs slightly. If they don’t regain consciousness quickly, call 911.
        </p>
      </div>

      <div className="accordion-item">
        <h2>📞 When in Doubt, Call 911</h2>
        <p>
          Don’t hesitate to call 911 in a medical emergency. Even if you're unsure whether it's necessary, emergency dispatchers
          are trained to guide you through the situation. Calling can save valuable time and may save a life. It's always better to be safe than sorry.
        </p>
      </div>

      <p className="medical-intro">
        Being prepared and knowing how to act can make a life-saving difference. Stay informed, stay calm, and seek help when needed.
      </p>
    </div>
  );
}

export default MedicalEmergency;
