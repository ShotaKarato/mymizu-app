import React, { useState } from "react";
import "../styles/LocationInfo.css";
import { useSelector } from "react-redux";
import moment from "moment";
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

  // toggle for the thank you message
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => {
    setShowMessage((prevMessage) => {
      const newShowMessage = prevMessage ? false : true;
      return newShowMessage;
    });
    setTimeout(() => {
      setShowMessage((prevMessage) => {
        const newShowMessage = prevMessage ? false : true;
        return newShowMessage;
      });
    }, 3000);
  };

  // update refill log and avatar's latest refill date
  const logRefill = () => {
    const currentTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    axios.post("/refill", { user_id: user_id });
    axios.put(
      "/avatar",
      { date: currentTime },
      {
        headers: JSON.parse(localStorage.getItem("mymizu")),
      }
    );
  };

  return (
    <>
      <div className="location-info">
        <h3>{chosenLocation.name}</h3>
        <p>{chosenLocation.address}</p>
        <img
          src={imgResult === null ? noImg : imgResult}
          alt="location image"
        />
        <br />
        <button
          id="refill-button"
          onClick={() => {
            logRefill();
            toggleMessage();
          }}
        >
          {" "}
          Refill Here{" "}
        </button>
      </div>
      <div className={showMessage ? "ty-message" : "ty-message hidden"}>
        <figure className="ty-img">
          <img src={process.env.PUBLIC_URL + `/image/ty-message.png`} />
        </figure>
      </div>
    </>
  );
}

export default LocationInfo;
