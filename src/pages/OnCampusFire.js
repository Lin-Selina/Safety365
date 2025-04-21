import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import candleimage from '../images/candle.jpeg';


function FireTips() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };


  return (
    <div className="blank-page">
        <Header />
      <h1>Spot the Fire Hazard in the Dorm</h1>

      <button 
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Start Here 
      </button>
      {showImage && (
        <div className="mt-4">
          <img 
            src={candleimage}
            alt="Spot the Candle" 
            style={{ width: '300px', height: 'auto' }} 
          />
        </div>
      )}

    </div>
  );
}

export default FireTips;
