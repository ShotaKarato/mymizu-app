import React from "react";
import { useSelector } from "react-redux";
import "../styles/Home.css";

function Home() {
	const auth = useSelector((state) => state.user.auth);
	return (
		<div>
			<p onClick={() => console.log(auth)}>Home</p>
		</div>
	);
}

export default Home;
