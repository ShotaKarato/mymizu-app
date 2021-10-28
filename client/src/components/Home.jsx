import React from "react";
import { useSelector } from "react-redux";
import "../styles/Home.css";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";

function Home() {
  const auth = useSelector((state) => state.user.auth);
  return (
    <>
      {/* <p onClick={() => console.log(auth)}>Home</p> */}
      <div id="banner">
        <div class="content">
          <h1>mymizu-gocchi</h1>
          <p>technology × sustainability</p>
        </div>
        <div id="message">
          We're the team whose mission is to make people's lives more fun and
          more sustainable through technology.
          <br></br>
          私たちは、テクノロジーを通して、人々の生活をより楽しく、
          そしてより持続可能にすることをミッションとするチームです。
        </div>
      </div>
      <HomeContent />
      <HomeFooter />
    </>
  );
}

export default Home;
