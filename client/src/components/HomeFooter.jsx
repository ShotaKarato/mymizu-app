import React from "react";
import "../styles/HomeFooter.css";

function HomeFooter() {
  return (
    <>
      <footer id="footer">
        <div id="copy-right">
          © 2021 Code Crysalis CC23 Team Puffer Fish All rights reserved
        </div>
        <ul>
          <img
            id="facebook-img"
            src="https://i.ibb.co/JszHFRx/facebook-1.png"
            alt="facebook"
          />
          <img
            id="instagram-img"
            src="https://i.ibb.co/YXXzYxz/instagram-1.png"
            alt="instagram"
          />
          <img
            id="youtube-img"
            src="https://i.ibb.co/M1csJ2s/youtube-1.png"
            alt="youtube"
          />
        </ul>
      </footer>
    </>
  );
}
export default HomeFooter;
