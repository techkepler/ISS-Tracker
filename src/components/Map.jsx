import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { iconISS } from "./Icon";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [data, setData] = useState([]);
  const url = "https://api.wheretheiss.at/v1/satellites/25544";

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(url);
      let jsonData = await res.json();
      setData(jsonData);
    };
  }, []);

  return (
    <div>
      <MapContainer
        center={[10.505, 106.058]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=LmfoIjrbaUkf8rzaciMA"
          attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Marker position={[28.3949, 84.124]} icon={iconISS}>
          <Popup>Longitude: Latitude:</Popup>
        </Marker>{" "}
      </MapContainer>
    </div>
  );
};

export default Map;
