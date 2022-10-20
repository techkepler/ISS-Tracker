import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { iconISS } from "./Icon";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [data, setData] = useState([]);

  const [timeInterval, setTimeInterval] = useState(0);

  // destructuring object
  const { longitude, latitude, velocity, visibility } = data;

  // Url to fetch data from wheretheiss.at website
  const url = "https://api.wheretheiss.at/v1/satellites/25544";

  // fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(url);
      let jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, [timeInterval]);

  setTimeout(() => {
    setTimeInterval(timeInterval + 1);
  }, 2000);

  return (
    <div>
      {Object.keys(data).length > 0 && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={2}
          scrollWheelZoom={true}
          style={{ width: "100vw", height: "100vh" }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=LmfoIjrbaUkf8rzaciMA"
            attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <Marker position={[latitude, longitude]} icon={iconISS}>
            <Popup>
              <p className="font-semibold">Longitude: {longitude}</p>
              <p>Latitude: {latitude}</p>
              <p>Velocity: {Math.round(velocity)} km/hr</p>
              <p>
                Visibility: {visibility === "daylight" ? "daylight" : "Night"}
              </p>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
