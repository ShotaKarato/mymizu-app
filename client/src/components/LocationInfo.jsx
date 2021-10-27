import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// avoid the cors issue
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

function LocationInfo(props) {
  const { chosenLocation } = props;
  const noImg =
    "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png";
  const imgResult = chosenLocation.photo_url;
  const { user_id } = useSelector((state) => state.avatar);

  const logRefill = () => {
    axios.post("/refill", { user_id: user_id });
  };

  return (
    <div className="location-info">
      <h3>{chosenLocation.name}</h3>
      <p>{chosenLocation.address}</p>
      <img src={imgResult === null ? noImg : imgResult} alt="location image" />
      <br />
      <button id="refill-button" onClick={() => logRefill()}>
        {" "}
        Refill Here{" "}
      </button>
    </div>
  );
}

export default LocationInfo;
