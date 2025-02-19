import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Gatorlink() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Implement login logic here
    console.log("Username:", username, "Password:", password);
    navigate('/home'); 
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
          type="password" // This password type allows for the eye feature in the password field
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
