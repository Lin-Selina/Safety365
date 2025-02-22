const express = require('express'); // express is a web framework for Node.js
const bcrypt = require('bcryptjs'); // bcrypt is a library to hash passwords
const jwt = require('jsonwebtoken'); // JSON Web Token (JWT) is a standard used to create access tokens for an application
const mysql = require('mysql2'); // SQL database client
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS) connects frontend and backend servers
const bodyParser = require('body-parser'); // parser for JSON data

const app = express(); // create an express app on port 5000
const port = 5001;
app.use(cors()); 
app.use(bodyParser.json());

const db = mysql.createConnection({ // create a connection to the MySQL database
  host: 'localhost', 
  user: 'root',      
  password: 'Manuroach23#',     
  database: 'user_auth'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Add logic to authenticate the username and password

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
