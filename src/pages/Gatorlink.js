import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Gatorlink() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLoginClick = async () => { 
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Login successful');
        navigate('/home'); 
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Signup link section */}
        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Gatorlink;
