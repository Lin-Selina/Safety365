import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Gatorlink() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // variable stores the username user input
  const [password, setPassword] = useState(''); // variable stores the password user input
  const [errorMessage, setErrorMessage] = useState(''); // state for error message

  const handleLoginClick = async () => { // function called when user presses "Login" button
    console.log("Username:", username, "Password:", password);
    navigate('/home');
  
    /*
    try {
      const response = await fetch('http://localhost:5000/gatorlink', {
        method: 'POST', // Post request sends the username and password to the server
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Pass username and password from variable state
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data.message);
        localStorage.setItem('token', data.token); // Store the token in localStorage for future use
        navigate('/home');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
    */
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
