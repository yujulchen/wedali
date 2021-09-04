import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const style = {
  width: "50vw",
  height: "62vh",
};

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("mapId", {
      center: [24.949708174343698, 121.33883086982388],
      zoom: 16,
      zoomControl: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    L.marker([24.949708174343698, 121.33883086982388], {
      icon: DefaultIcon,
    }).addTo(mapRef.current);

    // unmount map function
    return () => mapRef.current.remove();
  }, []);

  return <div id="mapId" style={style}></div>;
}

export default Map;
