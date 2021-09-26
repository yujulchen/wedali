import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const style = {
  width: "50vw",
  height: "62vh",
};

const Mobile = {
  width: "100vw",
  height: "62vh",
};

const addressEng = `No. 2, Ln. 367, Jianguo Rd., Yingge Dist., New
Taipei City, Taiwan (R.O.C.)`;

function Map(props) {
  const { isMobile, isEnglish } = props;
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("mapId", {
      center: [24.949708174343698, 121.33883086982388],
      zoom: 16,
      zoomControl: false,
      closePopupOnClick: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    L.popup({
      closeButton: false,
      keepInView: true,
    })
      .setLatLng([24.949708174343698, 121.33883086982388])
      .setContent(
        `<a href="https://goo.gl/maps/6AYRxwjfnb47NaSPA" target="_blank" style="text-decoration:none; color:#48d1cc">${
          isEnglish ? addressEng : "新北市鶯歌區建國路367巷2號"
        }</a>`
      )
      .openOn(mapRef.current);

    // unmount map function
    return () => mapRef.current.remove();
  }, []);

  return <div id="mapId" style={isMobile ? Mobile : style}></div>;
}

export default Map;
