import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';

function MentalHealthTracker() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);
  

  const handleLogMoodClick = async () => {
    if (!mood) return alert('ERROR: You have not selected a mood!');
  
    const newEntry = { userId: 1, mood, notes }; // Replace '1' with the logged-in user's ID
  
    try {
      const response = await fetch('http://localhost:3000/add-mood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Mood logged successfully!');
        // Add the new entry to local state (UI)
        setEntries([...entries, { ...newEntry, date: new Date().toLocaleDateString() }]);
        setMood('');
        setNotes('');
      } else {
        alert(data.message || 'Failed to log mood');
      }
    } catch (error) {
      console.error('Error logging mood:', error);
      alert('Error logging mood. Please try again later.');
    }
  };  

  const moods = [
    "Angry", "Anxious", "Bored", "Calm", "Confident", "Confused", "Depressed", "Disappointed", "Disgusted",
    "Embarrassed", "Exhausted", "Happy", "Joyful", "Nervous", "Overwhelmed", "Sad", "Shocked", "Worried"
  ];
  
  return (
    <div className="blank-page">
      <Header />
      <h1>Mental Health Tracker</h1>
  
      <div className="tracker-container">
        
        <div className="mood-section">
          <h3>Select Your Mood For This Entry:</h3>
          <div className="mood-grid">
            {moods.map((m, index) => (
              <button 
                key={index} 
                className={`mood-button ${mood === m ? 'selected' : ''}`} 
                onClick={() => setMood(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
  
        <div className="notes-section">
          <h3>Write about how you are feeling or any current thoughts!</h3>
          <textarea
            placeholder="Write your entry here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="notes-input"
          />
          <button className="log-mood-button" onClick={handleLogMoodClick}>Log This Mood Entry</button>
        </div>
  
      </div>
  
      <div className="logged-entries">
        <h3>Past Entries</h3>
        {entries.length === 0 ? <p>No logs yet.</p> : (
          <ul>
            {entries.map((entry, index) => (
              <li key={index} className="entry-item">
                <strong>{entry.date}</strong> - {entry.mood} 
                {entry.notes && <p>Notes: {entry.notes}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );  

}
export default MentalHealthTracker;
