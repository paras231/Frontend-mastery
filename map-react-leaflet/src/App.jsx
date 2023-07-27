import { useState, useEffect } from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      console.log(p);
      setLat(p.coords.latitude);
      setLong(p.coords.longitude); 
    });
  },[navigator]); 
  
  return ( 
    <>
      <MapContainer
        style={{ height: "70vh", width: "70vw" }}
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
}

export default App;

const LocationMarker = () => {
  
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy; 
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);
  return (
    <>
      {position === null ? null : (
        <Marker position={position}>
          <Popup>
            You are here. <br />
            Map bbox: <br />
            <b>Southwest lng</b>: {bbox[0]} <br />
            <b>Southwest lat</b>: {bbox[1]} <br />
            <b>Northeast lng</b>: {bbox[2]} <br />
            <b>Northeast lat</b>: {bbox[3]}
          </Popup>
        </Marker>
      )}
    </>
  );
};
