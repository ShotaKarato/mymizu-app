import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

function Avatar() {
  // get avatar data
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
    <div>
      <figure>
        <img
          src={process.env.PUBLIC_URL + `/image/${level}_${mood}.png`}
          alt="mizugocchi avatar"
        />
      </figure>
    </div>
  );
}

export default Avatar;
