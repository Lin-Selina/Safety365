const express = require('express'); // express is a web framework for Node.js
// const bcrypt = require('bcryptjs'); // bcrypt is a library to hash passwords
const jwt = require('jsonwebtoken'); // JSON Web Token (JWT) is a standard used to create access tokens for an application
const mysql = require('mysql2'); // SQL database client
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS) connects frontend and backend servers
const bodyParser = require('body-parser'); // parser for JSON data

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({ // create a connection to the MySQL database
  host: 'localhost',
  user: 'root',      
  password: '', // change your MySQL password if needed
  database: 'user_auth'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Handle user login (WE NEED TO LOOK INTO BCRYPT TO HASH THE LOGIN INFO)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query the database for a matching username and password
  db.query('SELECT * FROM appUsers WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Username and/or password are NOT in the database already' });
    }

    // Generate a JWT token
    const user = results[0];
    const token = jwt.sign({ userId: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send token to frontend
    res.status(200).json({ message: 'Login successful', token });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});