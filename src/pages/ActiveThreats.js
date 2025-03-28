import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import axios from 'axios';

function ActiveThreats() {
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState('');

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCoords({ lat, lon });

      try {
        const res = await axios.post('http://localhost:3000/api/location', { lat, lon });
        setAddress(res.data.address);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }, () => {
      alert("Unable to retrieve your location");
    });
  };

  return (
    <div className="blank-page">
      <Header />
      <h1>Active Threats</h1>
      <button onClick={handleGetLocation}>Get My Location</button>
      {coords && <p>Latitude: {coords.lat}, Longitude: {coords.lon}</p>}
      {address && <p>Approximate Address: {address}</p>}
    </div>
  );
}

export default ActiveThreats;
