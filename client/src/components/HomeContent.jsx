import React from "react";
import "../styles/HomeContent.css";

function HomeContent() {
  return (
    <div className="flex-container">
      <div className="flex-items">
        <div className="mv">
          <h1> Mission </h1>
        </div>
        <div className="hiddentext">
          <p>
            {" "}
            Our mission is to contribute to mymizu's movement by adding
            mymizugocchi.{" "}
          </p>
        </div>
      </div>
      <div className="flex-items">
        <div className="mv">
          <h1> Vision </h1>
        </div>
        <div className="hiddentext">
          <p>
            {" "}
            Our vision is to attract more users to use mymizu, so we can all use
            less plastic together as a community.{" "}
          </p>
        </div>
      </div>
      <div className="flex-items">
        <div className="logindirect">
          <h1> Adopt a mizugocchi now! </h1>
          <img
            id="mizugocchi"
            src="https://i.ibb.co/DYRhGSb/mizugocchi00-happy.png"
          />
        </div>
        <div className="hiddentext">
          <a href="/#/login">
            <button id="loginbtn"> Login </button>
          </a>
          <br />
          <a href="/#/login">
            <button id="loginbtn"> Sign Up </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
