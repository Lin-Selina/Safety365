import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Gatorlink() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // variable stores the username user input
  const [password, setPassword] = useState(''); // variable stores the password user input
  const [errorMessage, setErrorMessage] = useState(''); // state for error message

  const handleLoginClick = async () => { 
    try {
      // Send POST request to the backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Store the token in localStorage if the login is successful
        localStorage.setItem('token', data.token);
        console.log('Login successful');
        navigate('/home'); // Redirect to home page
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }; 

  return (
    <div className="blank-page">
      <Header />
      <h1 className="login-heading">Login</h1>
      
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password" // this type "password" allows for the password to be hidden using the eye feature
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default Gatorlink;
