import React, { useState, useEffect } from 'react';
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

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function ActiveThreats() {
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState('');
  const [crimeMarkers, setCrimeMarkers] = useState([]);

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

  // Fetch crime reports on mount
  useEffect(() => {
    const fetchCrimeMarkers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/crime-reports');

        const geocodedCrimes = await Promise.all(
          res.data.map(async (crime) => {
            try {
              const geo = await axios.post('http://localhost:3000/api/location', { address: crime.address });
              return {
                ...crime,
                lat: geo.data.coords.lat,
                lon: geo.data.coords.lon
              };
            } catch (e) {
              console.warn(`Geocoding failed for: ${crime.address}`);
              return null;
            }
          })
        );

        setCrimeMarkers(geocodedCrimes.filter(Boolean)); 
        console.log("Fetched crime markers:", geocodedCrimes);

      } catch (err) {
        console.error("Failed to fetch crime reports:", err);
      }
    };

    fetchCrimeMarkers();
  }, []);

  return (
    <div className="blank-page">
      <Header />
      <h1 className="threats-heading">Active Threats</h1>
      
      <button className="login-button" onClick={handleGetLocation}>Get My Location</button>

      {coords && (
        <>
          {address && <p>Your Approximate Address: {address}</p>}
          <MapContainer center={[coords.lat, coords.lon]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            
            {/* Marker for user location */}
            <Marker position={[coords.lat, coords.lon]}>
              <Popup>You are here: {address}</Popup>
            </Marker>

            {/* Markers for crimes */}
            {crimeMarkers.map((crime, idx) => (
              <Marker key={idx} position={[crime.lat, crime.lon]} icon={redIcon}>
                <Popup>
                  <strong>{crime.description}</strong><br />
                  {crime.address}<br />
                  Date: {new Date(crime.report_date).toLocaleString()}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default ActiveThreats;
