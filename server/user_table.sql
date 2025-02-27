CREATE DATABASE user_auth;

USE user_auth;

CREATE TABLE appUsers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO appUsers (username, password) VALUES ('testuser@ufl.edu', 'testpassword');
