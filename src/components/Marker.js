import React, { useState } from "react";
// import Geocode from "react-geocode";

function Marker(props) {
  const { latitude, longitude } = props.position;
  const [displayModal, setDisplayModal] = useState(false);

  //FOR BILLING ACCOUNT ONLY

  // useEffect(() => {
  //   Geocode.setApiKey("");
  //   Geocode.fromLatLng(latitude, longitude).then(
  //     response => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }, [position])

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div
      onClick={toggleModal}
      onMouseOut={toggleModal}
      onMouseOver={toggleModal}
    >
      {!!displayModal && (
        <div className="marker-modal">
          <span>{`Longitude: ${longitude.toFixed(8)}`}</span>
          <br />
          <br />
          <span>{`Latitude: ${latitude.toFixed(8)}`}</span>
        </div>
      )}
      <img
        alt="marker-icon"
        className="marker-wrapper"
        src="static/images/marker.png"
      />
    </div>
  );
}

export default Marker;
