import React from 'react';
import '../App.css';
import Header from '../components/Header';

function MedicalEmergency() {
  return (
    <div className="blank-page">
      <Header />
      <h1>Medical Emergency</h1>
      <p>
        Medical emergencies can happen unexpectedly. It's important to stay calm, act quickly, and know what steps to take.
        Here are some common scenarios college students may face and how to respond:
      </p>

      <div className="emergency-box">
        <h2>🚑 Alcohol Poisoning</h2>
        <p>
          If someone is unconscious, vomiting repeatedly, breathing irregularly, or has pale/blue-tinged skin after drinking,
          they may have alcohol poisoning. Call 911 immediately. While waiting, turn the person on their side to prevent choking
          and do not leave them alone. Do not try to “sleep it off.”
        </p>
      </div>

      <div className="emergency-box">
        <h2>🧠 Concussions</h2>
        <p>
          If a person hits their head and experiences dizziness, confusion, nausea, or loss of consciousness, they may have
          a concussion. Stop all physical activity and seek medical attention right away. Monitor them closely for several
          hours for worsening symptoms.
        </p>
      </div>

      <div className="emergency-box">
        <h2>❤️ Panic or Anxiety Attacks</h2>
        <p>
          Symptoms may include chest pain, shortness of breath, rapid heartbeat, or a feeling of impending doom. Help the person
          sit down, take slow deep breaths, and reassure them they are safe. Encourage them to seek counseling or support services afterward.
        </p>
      </div>

      <div className="emergency-box">
        <h2>💉 Severe Allergic Reactions (Anaphylaxis)</h2>
        <p>
          If someone is experiencing swelling, difficulty breathing, or a rapid drop in blood pressure after eating or being
          exposed to a known allergen, use an epinephrine auto-injector (EpiPen) if available and call 911 immediately. Do not delay.
        </p>
      </div>

      <div className="emergency-box">
        <h2>🔥 Burns</h2>
        <p>
          For minor burns, cool the area under running water and cover it with a clean cloth. For more severe burns, do not apply
          ointments—call 911 and cover the area with a cool, moist cloth while waiting for help.
        </p>
      </div>

      <div className="emergency-box">
        <h2>🫀 Fainting</h2>
        <p>
          If someone faints, check for breathing and responsiveness. If they’re breathing, lay them on their back and elevate
          their legs slightly. If they don’t regain consciousness quickly, call 911.
        </p>
      </div>

      <div className="emergency-box">
        <h2>📞 When in Doubt, Call 911</h2>
        <p>
          Don’t hesitate to call 911 in a medical emergency. Even if you're unsure whether it's necessary, emergency dispatchers
          are trained to guide you through the situation. Calling can save valuable time and may save a life. It's always better to be safe than sorry.
        </p>
      </div>

      <p>
        Being prepared and knowing how to act can make a life-saving difference. Stay informed, stay calm, and seek help when needed.
      </p>
    </div>
  );
}

export default MedicalEmergency;
