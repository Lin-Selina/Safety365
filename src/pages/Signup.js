import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignupClick = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!username.endsWith('@ufl.edu')) {
      setErrorMessage('You must have a @ufl.edu email to use this site.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Account created successfully! Redirecting to login...');
        setTimeout(() => navigate('/gatorlink'), 2000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="blank-page">
      <Header />
      <h1 className="signup-heading">Sign Up</h1>

      <div className="signup-form">
        <input
          type="text"
          placeholder="Enter your @ufl.edu email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <p className="login-text">
          Already have an account? <a href="/gatorlink" className="login-link">Log in here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
