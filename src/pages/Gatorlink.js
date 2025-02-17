import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Gatorlink() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="blank-page">
      <Header />
      <h1>Login</h1>
      <button className="nav-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Gatorlink;
