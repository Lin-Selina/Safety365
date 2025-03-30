import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';            

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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

      {coords && (
        <>
          <p>Latitude: {coords.lat}, Longitude: {coords.lon}</p>
          {address && <p>Approximate Address: {address}</p>}

          <MapContainer 
            center={[coords.lat, coords.lon]} 
            zoom={13} 
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coords.lat, coords.lon]}>
              <Popup>
                You are here: {address || `${coords.lat}, ${coords.lon}`}
              </Popup>
            </Marker>
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default ActiveThreats;
