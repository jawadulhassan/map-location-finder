import React, { useState } from "react";
import { isEmpty } from "lodash";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker";

function SimpleMap() {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    setIsLoading(false);
  };
  const onError = (error) => {
    setError(error.message);
    setIsLoading(false);
  };

  function getLocation() {
    setIsLoading(true);
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  }

  const MarkerSetter = (pos) => {
    return !isEmpty(pos) ? (
      <Marker lat={pos.latitude} lng={pos.longitude} position={pos} />
    ) : null;
  };

  return (
    <div className="maps-wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: 39.082,
          lng: 48.6753,
        }}
        defaultZoom={1}
      >
        {!!error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {MarkerSetter(position)}
      </GoogleMapReact>
      <div className="button-positioning">
        <button
          type="button"
          className="btn btn-dark"
          disabled={!!isLoading && true}
          onClick={getLocation}
        >
          {!isLoading ? "Locate me" : "Locating..."}
        </button>
      </div>
    </div>
  );
}

export default SimpleMap;
