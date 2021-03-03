import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {offersTypes} from '../../types/types';

import 'leaflet/dist/leaflet.css';

const Map = ({points}) => {
  const mapRef = useRef(null);

  let city = {
    lat: 52.38333,
    lng: 4.9,
    zoom: 10
  };

  if (points.length) {
    city = {
      lat: points[0].city.location.latitude,
      lng: points[0].city.location.longitude,
      zoom: points[0].city.location.zoom
    };
  }

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current = leaflet.map(`map`, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: city.zoom
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(mapRef.current);
    }
    return () => {
      mapRef.current.remove();
    };
  });

  useEffect(() => {
    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        },
        {
          icon: customIcon
        })
        .addTo(mapRef.current)
        .bindPopup(point.location.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, [points]);

  return (
    <div id="map" style={{width: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  points: offersTypes
};

export default Map;
