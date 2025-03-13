const express = require('express'); // Express is a web framework for Node.js
const jwt = require('jsonwebtoken'); // JSON Web Token (JWT) is used for authentication
const mysql = require('mysql2'); // SQL database client
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS) connects frontend and backend servers
const bodyParser = require('body-parser'); // Parser for JSON data

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({ // Create a connection to the MySQL database
  host: 'localhost',
  user: 'root',      
  password: '', // Change your MySQL password if needed
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

// Handle adding mood entries
app.post("/add-mood", (req, res) => {
  const { userId, mood, notes } = req.body;
  if (!userId || !mood) return res.status(400).json({ message: "User ID and mood are required." });

  const query = "INSERT INTO mood_entries (user_id, mood, notes) VALUES (?, ?, ?)";
  db.query(query, [userId, mood, notes], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error." });
    res.status(201).json({ message: "Mood logged successfully!" });
  });
});

// Handle fetching the past mood entries
app.get("/entries/:userId", (req, res) => {
  const { userId } = req.params;
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

// Handle searching mood entries
app.get("/search-entries/:userId", (req, res) => {
  const { userId } = req.params;
  const { searchTerm } = req.query;
  
  if (!searchTerm) {
    return res.status(400).json({ message: "Search term is required." });
  }

  const query = "SELECT id, mood, notes, date FROM mood_entries WHERE user_id = ? AND (mood LIKE ? OR notes LIKE ?) ORDER BY date DESC";
  const searchPattern = `%${searchTerm}%`;

  db.query(query, [userId, searchPattern, searchPattern], (err, results) => {
    if (err) {
      console.error("Error searching mood entries:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
