import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvatar } from "../slices/avatarSlice";
import "../styles/Avatar.css";
import { Link } from "react-router-dom";

function Avatar() {
  // setup redux
  const dispatch = useDispatch();
  // get avatar data
  useEffect(() => {
    dispatch(fetchAvatar());
  }, []);

  // assign variable for avatar data
  const avatar = useSelector((state) => state.avatar);
  // level
  const level =
    avatar.level === 0
      ? "mizugocchi00"
      : avatar.level === 1
      ? "mizugocchi01"
      : "mizugocchi02";

  // mood
  const latestRefillTime = moment(avatar.date);
  const timeDiff = latestRefillTime.fromNow();
  const mood = timeDiff <= 3 ? "happy" : timeDiff <= 10 ? "normal" : "sad";

  return (
    <div className="avatar-wrapper">
      <ul className="avatar-meter">
        <li className="avatar-meter-item">
          <span>Level</span>
          <br /> {avatar.level}
        </li>
        <li className="avatar-meter-item">
          <span>Latest Refill</span>
          <br /> {latestRefillTime.format("MMMM d, YYYY")}
        </li>
      </ul>
      <figure className="avatar">
        <img
          src={process.env.PUBLIC_URL + `/image/${level}_${mood}.png`}
          alt="mizugocchi avatar"
        />
      </figure>
      <button className="btn-refill">
        <Link to="/map" style={{ color: "#fff", textDecoration: "none" }}>
          Find Spots
        </Link>
      </button>
    </div>
  );
}

export default Avatar;
