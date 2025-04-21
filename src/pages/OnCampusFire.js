import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import candleimage from '../images/candle.jpeg';

function FireTips() {
  const [showImage, setShowImage] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [clickCoords, setClickCoords] = useState(null);

  const hotspotBox = {
    x1: 400,
    y1: 1120,
    x2: 630,
    y2: 1320,
  };

  const actualImageWidth = 1598;
  const actualImageHeight = 1599;
  const displayWidth = 500;

  const handleClick = () => {
    setShowImage(true);
    setFeedback('');
    setClickCoords(null);
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scale = actualImageWidth / displayWidth;
    const scaledX = clickX * scale;
    const scaledY = clickY * scale;

    if (
      scaledX >= hotspotBox.x1 &&
      scaledX <= hotspotBox.x2 &&
      scaledY >= hotspotBox.y1 &&
      scaledY <= hotspotBox.y2
    ) {
      setFeedback('✅ You found the fire hazard! Remember that your living space can contain many fire hazards. Common fire hazards include open candles, space heaters, overloaded power strips, covering smoke detectors with curtains or tapestries, leaving cooking food unattended, and ironing on flammable surfaces.');
    } else {
      setFeedback('❌ Try again. That’s not the fire hazard.');
    }
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
        <div className="mt-4 relative" style={{ width: `${displayWidth}px` }}>
          <img
            src={candleimage}
            alt="Spot the Candle"
            style={{ width: '100%', height: 'auto', cursor: 'crosshair' }}
            onClick={handleImageClick}
          />
          {clickCoords && (
            <div
              style={{
                position: 'absolute',
                top: `${clickCoords.y}px`,
                left: `${clickCoords.x}px`,
                transform: 'translate(-50%, -50%)',
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            ></div>
          )}
        </div>
      )}

      {feedback && <p className="mt-2 text-lg">{feedback}</p>}
    </div>
  );
}

export default FireTips;
