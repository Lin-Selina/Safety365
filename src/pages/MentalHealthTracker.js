import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';

function MentalHealthTracker() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem('token'); // or get from context

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const url = searchTerm.trim() === ''
          ? 'http://localhost:3000/entries'
          : `http://localhost:3000/search-entries?searchTerm=${encodeURIComponent(searchTerm)}`;

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error('Error fetching mood entries:', error);
      }
    };

    fetchEntries();
  }, [searchTerm, token]);

  const handleLogMoodClick = async () => {
    if (!mood) return alert('ERROR: You have not selected a mood!');

    const newEntry = { mood, notes, date: new Date().toISOString() };

    try {
      const response = await fetch('http://localhost:3000/add-mood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ mood, notes }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Mood logged successfully!');
        setEntries([...entries, newEntry]);
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

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search past entries by mood, notes, or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

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
          <button className="log-mood-button" onClick={handleLogMoodClick}>
            Log This Mood Entry
          </button>
        </div>
      </div>

      <div className="entries-container">
        <div className="entries-column">
          <h3>Past Entries</h3>
          {entries.length === 0 ? <p>No logs found.</p> : (
            <ul>
              {entries.map((entry, index) => (
                <li key={index} className="entry-item">
                  <strong>{new Date(entry.date).toLocaleString()}</strong> - {entry.mood}
                  {entry.notes && <p>Notes: {entry.notes}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="suggestions-column">
          <h3>Suggested Tips</h3>
          {entries.length === 0 ? <p>No suggestions yet.</p> : (
            <ul>
              {entries.map((entry, index) => (
                <li key={index} className="suggestion-item">
                  {"Add the suggestions here!"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentalHealthTracker;