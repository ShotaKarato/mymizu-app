import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/LocationInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogsNumber } from "../slices/logSlice";
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

  // toggle for the thank you message
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
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
      history.push("/avatar");
    }, 3000);
  };

  // check how many logs exists
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLogsNumber());
  }, []);
  const log = useSelector((state) => state.log);
  // update refill table and level based on the number of logs
  const logRefill = async () => {
    const currentTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    if (log.length === 4) {
      await axios.post(
        "/refill",
        {},
        {
          headers: JSON.parse(localStorage.getItem("mymizu")),
        }
      );
      await axios.put(
        "/avatar",
        { date: currentTime, level: 1 },
        {
          headers: JSON.parse(localStorage.getItem("mymizu")),
        }
      );
    } else {
      await axios.post(
        "/refill",
        {},
        {
          headers: JSON.parse(localStorage.getItem("mymizu")),
        }
      );
      await axios.put(
        "/avatar",
        { date: currentTime },
        {
          headers: JSON.parse(localStorage.getItem("mymizu")),
        }
      );
    }
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
