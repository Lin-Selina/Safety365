CREATE DATABASE user_auth;

USE user_auth;

CREATE TABLE appUsers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO appUsers (username, password) VALUES ('testuser@ufl.edu', 'testpassword');

CREATE TABLE mood_entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    mood VARCHAR(50) NOT NULL,
    notes TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES appUsers(id) ON DELETE CASCADE 
);

CREATE TABLE hurricane_checklist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(255) NOT NULL UNIQUE,
  checked BOOLEAN NOT NULL
);
