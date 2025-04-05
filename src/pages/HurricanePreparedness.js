import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';

function HurricanePreparedness() {
  const [notes, setNotes] = useState('');
  const [checkboxes, setCheckboxes] = useState({});

  // Fetch initial checkbox states from backend on mount
  useEffect(() => {
    fetch('http://localhost:3000/api/checkbox')
      .then(res => res.json())
      .then(data => {
        const checkboxState = {};
        data.forEach(item => {
          checkboxState[item.item] = !!item.checked;
        });
        setCheckboxes(checkboxState);
      })
      .catch(err => console.error('Error fetching checkbox states:', err));
  }, []);

  const handleNotesClick = async () => {
    console.log("Notes submitted:", notes);
  };

  // Handle checkbox toggle and send to backend
  const handleCheckboxChange = (item) => {
    const newChecked = !checkboxes[item];

    // Update local state
    setCheckboxes((prev) => ({
      ...prev,
      [item]: newChecked,
    }));

    // Send update to server
    fetch('http://localhost:3000/checkbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item, checked: newChecked }),
    })
    .then(res => res.json())
    .then(data => {
      console.log('Saved checkbox:', data.message);
    })
    .catch(err => {
      console.error('Error saving checkbox:', err);
    });
  };

  const renderChecklist = (title, items) => (
    <div className="tracker-container">
      <div className="mood-section">
        <h3>{title}</h3>
        <ul className="checklist">
          {items.map((item, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={checkboxes[item] || false}
                  onChange={() => handleCheckboxChange(item)}
                />
                {` ${item}`}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="blank-page">
      <Header />
      <h1>Hurricane Preparedness</h1>

      {renderChecklist("Emergency Supply Checklist", [
        "Flashlight with extra batteries",
        "Battery Operated Radio with extra batteries",
        "Candles with matches/lighter",
        "Clock with extra batteries",
        "Extra blankets and pillows",
        "Tent or tarp for shelter",
        "Battery operated fan or heater",
        "Hand sanitizer and disinfectant wipes"
      ])}

      {renderChecklist("First-Aid Checklist", [
        "Band-Aids",
        "Peroxide",
        "Prescriptions",
        "Thermometer",
        "Pain Reliever Medication - Kids and Adult",
        "(20) adhesive bandages, various sizes",
        "Sterile Gauze Pads",
        "Antiseptic wipes",
        "Medical Gloves Non-Latex",
        "Adhesive Tape",
        "Anti-bacterial ointment",
        "Scissors",
        "Antacid (for stomach upset)"
      ])}

      {renderChecklist("Personal Necessities Checklist", [
        "Toilet Paper",
        "Garbage Bags",
        "Ziplock Bags",
        "Bug Spray",
        "Female Hygiene",
        "Dry Shampoo",
        "Sunscreen",
        "Soap",
        "Umbrella",
        "Phone Charger"
      ])}

      {renderChecklist("Food and Drinks Checklist", [
        "Manual Can Opener",
        "Water for 3 days for each person",
        "Non-perishable food items",
        "Canned Food",
        "Disposable Plates and Utensils",
        "Napkins",
        "Ready-to-eat canned meats, fruits, and vegetables",
        "Snacks"
      ])}

      {renderChecklist("Documents Checklist", [
        "State ID / Driver's License",
        "Passport",
        "Wills",
        "Insurance Paperwork",
        "Medical Cards",
        "Vaccination Records"
      ])}

      <div className="notes-section">
        <h3>Write your personal to-do items or notes here!</h3>
        <textarea
          placeholder="Write your entry here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="notes-input"
        />
        <button className="log-mood-button" onClick={handleNotesClick}>Log This Note</button>
      </div>
    </div>
  );
}

export default HurricanePreparedness;
