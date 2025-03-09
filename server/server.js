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
  password: 'Manuroach23#', // Change your MySQL password if needed
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
