import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import candleimage from '../images/candle.jpeg';
import ovenImage from '../images/oven.jpeg';

function FireTips() {
  const actualImageWidth = 1598;
  const actualImageHeight = 1599;
  const displayWidth = 500;

  const levels = [
    {
      image: candleimage,
      hotspotBox: {
        x1: 400,
        y1: 1120,
        x2: 630,
        y2: 1320,
      },
      message: 'You found the fire hazard! Here is the next one in 3... 2... 1...',
    },
    {
      image: ovenImage,
      hotspotBox: {
        x1: 400,
        y1: 930,
        x2: 1220,
        y2: 1480,
      },
      message: 'You found the fire hazard! Here is the next one.',
    },
  ];

  const [showImage, setShowImage] = useState(false);
  const [levelIndex, setLevelIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [clickCoords, setClickCoords] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleClick = () => {
    setShowImage(true);
    setFeedback('');
    setClickCoords(null);
    setLevelIndex(0);
    setGameCompleted(false);
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scale = actualImageWidth / displayWidth;
    const scaledX = clickX * scale;
    const scaledY = clickY * scale;

    setClickCoords({ x: clickX, y: clickY });

    const { x1, y1, x2, y2 } = levels[levelIndex].hotspotBox;

    if (
      scaledX >= x1 &&
      scaledX <= x2 &&
      scaledY >= y1 &&
      scaledY <= y2
    ) {
      if (levelIndex < levels.length - 1) {
        setFeedback(levels[levelIndex].message);
        setTimeout(() => {
          setLevelIndex(levelIndex + 1);
          setClickCoords(null);
          setFeedback('');
        }, 2500);
      } else {
        setFeedback('Great Job! Remember that your living space can contain many fire hazards. Common fire hazards include open candles, space heaters, overloaded power strips, covering smoke detectors with curtains or tapestries, leaving cooking food unattended, and ironing on flammable surfaces.',
        );
        setGameCompleted(true);
      }
    } else {
      setFeedback('Try again. That’s not the fire hazard.');
    }
  };

  const currentLevel = levels[levelIndex];

  return (
    <div className="blank-page flex flex-col items-center">
      <Header />

      <p className="text-center max-w-xl mt-4">
        Many fires on campus are caused by placing potential fire hazards in dorm rooms. Test your knowledge and see if you can identify the potential hazards in these on-campus housing images.
      </p>

      <h1 className="text-center text-2xl font-bold my-4">Spot the Fire Hazard in the Dorm</h1>

      {!showImage && (
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Start Here
        </button>
      )}

      {showImage && (
        <div className="mt-4 flex justify-center">
          <div className="relative" style={{ width: `${displayWidth}px` }}>
            <img
              src={currentLevel.image}
              alt={`Level ${levelIndex + 1}`}
              style={{ width: '100%', height: 'auto', cursor: 'crosshair' }}
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}

      {feedback && (
        <p className="mt-4 text-lg text-center max-w-lg px-4">{feedback}</p>
      )}

      {gameCompleted && (
        <button
          onClick={handleClick}
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Restart Game
        </button>
      )}
    </div>
  );
}

export default FireTips;
