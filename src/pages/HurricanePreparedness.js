import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';

function HurricanePreparedness() {
  const [checkboxes, setCheckboxes] = useState({});

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

  const handleCheckboxChange = (item) => {
    const newChecked = !checkboxes[item];
    setCheckboxes((prev) => ({
      ...prev,
      [item]: newChecked,
    }));

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

  const renderChecklist = (title, colorClass, items = []) => (
    <div className="hurricane-checklist-section">
      <div className={`hurricane-section-header ${colorClass}`}>
        <h2>{title}</h2>
      </div>
      <ul className="hurricane-checklist">
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkboxes[item] || false}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="blank-page">
      <Header />
      <h1 className="hurricane-title">Hurricane Preparedness Checklist</h1>

      <div className="vertical-checklist">
        {renderChecklist("First Response Supplies", "section-green", [
          "Flashlight with extra batteries",
          "Battery Operated Radio",
          "Candles with matches/lighter",
          "Clock with extra batteries",
          "Tent or tarp for shelter",
          "Extra blankets and pillows"
        ])}

        {renderChecklist("First Aid Essentials", "section-blue", [
          "Band-Aids",
          "Peroxide",
          "Prescriptions",
          "Thermometer",
          "Pain Relievers (kids & adults)",
          "Sterile gauze & adhesive tape",
          "Antiseptic wipes and gloves",
          "Scissors and anti-bacterial ointment"
        ])}

        {renderChecklist("Personal Necessities", "section-yellow", [
          "Toilet Paper & Garbage Bags",
          "Ziplock Bags",
          "Bug Spray & Sunscreen",
          "Female Hygiene Products",
          "Dry Shampoo & Soap",
          "Phone Charger & Umbrella"
        ])}

        {renderChecklist("Food and Water", "section-pink", [
          "Manual Can Opener",
          "Water (3 days per person)",
          "Ready-to-eat canned goods",
          "Disposable plates & utensils",
          "Snacks & napkins"
        ])}

        {renderChecklist("Important Documents", "section-purple", [
          "Driver’s License or State ID",
          "Passport",
          "Wills",
          "Insurance Information",
          "Medical Cards & Vaccination Records"
        ])}
      </div>
    </div>
  );
}

export default HurricanePreparedness;
