const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const authenticateToken = require('./routes/auth');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_auth'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM appUsers WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Username and/or password is incorrect or does not exist' });
    }

    const user = results[0];
    const token = jwt.sign({ userId: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  });
});

// Handle user signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username.endsWith('@ufl.edu')) {
    return res.status(400).json({ message: 'You must have a @ufl.edu email to use this site' });
  }

  db.query('SELECT * FROM appUsers WHERE username = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Account with email already exists. Please log in.' });
    }

    db.query('INSERT INTO appUsers (username, password) VALUES (?, ?)', [username, password], (insertErr, result) => {
      if (insertErr) {
        return res.status(500).json({ message: 'Error creating account' });
      }

      res.status(201).json({ message: 'Account created successfully' });
    });
  });
});

// Add mood entry (protected)
app.post("/add-mood", authenticateToken, (req, res) => {
  const { mood, notes } = req.body;
  const userId = req.user.userId;

  if (!mood) return res.status(400).json({ message: "Mood is required." });

  const query = "INSERT INTO mood_entries (user_id, mood, notes) VALUES (?, ?, ?)";
  db.query(query, [userId, mood, notes], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error." });
    res.status(201).json({ message: "Mood logged successfully!" });
  });
});

// Fetch past mood entries (protected)
app.get("/entries", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  const query = "SELECT id, mood, notes, date FROM mood_entries WHERE user_id = ? ORDER BY date DESC";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching mood entries:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// Search mood entries (protected)
app.get("/search-entries", authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const { searchTerm } = req.query;

  if (!searchTerm) {
    return res.status(400).json({ message: "Search term is required." });
  }

  const query = `
  SELECT id, mood, notes, date 
  FROM mood_entries 
  WHERE user_id = ? 
    AND (
      mood LIKE ? 
      OR notes LIKE ? 
      OR DATE_FORMAT(date, '%c/%e/%Y') LIKE ?
    )
  ORDER BY date DESC
`;

  const pattern = `%${searchTerm}%`;

  db.query(query, [userId, pattern, pattern, pattern], (err, results) => {
    if (err) {
      console.error("Error searching mood entries:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// Handle location data (no auth needed)
app.post("/api/location", async (req, res) => {
  const { lat, lon } = req.body;

  if (!lat || !lon) {
    return res.status(400).json({ message: "Latitude and longitude required." });
  }

  try {
    const apiKey = 'd30a1c28965d4a0994d1b29ec6b1d6e8';
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
    );

    const address = response.data?.results?.[0]?.formatted || 'Unknown location';
    res.json({ address });
  } catch (error) {
    console.error("Geocoding failed:", error.message);
    res.status(500).json({ message: "Error fetching location." });
  }
});

// Save checkbox state to hurricane_checklist
app.post('/checkbox', (req, res) => {
  const { item, checked } = req.body;

  if (!item) return res.status(400).json({ message: 'Item name is required.' });

  const query = "INSERT INTO hurricane_checklist (item, checked) VALUES (?, ?) ON DUPLICATE KEY UPDATE checked = VALUES(checked)"; 
  db.query(query, [item, checked ? 1 : 0], (err, result) => {
    if (err) {
      console.error('Error storing checkbox:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json({ message: 'Checkbox state saved.' });
  });
});

// Get the checkbox state from hurricane_checklist
app.get('/api/checkbox', (req, res) => {
  db.query('SELECT item, checked FROM hurricane_checklist', (err, results) => {
    if (err) {
      console.error('Error fetching checklist:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json(results);
  });
});


// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
