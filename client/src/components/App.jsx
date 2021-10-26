import React, { useState } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import Avatar from "./Avatar";
import Map from "./Map";
import RecentLogs from "./RecentLogs";

function App() {
	const [currView, setCurrView] = useState("Map"); // Change back to Avatar

	return (
		<div className="App">
			<header>
				<NavBar setCurrView={setCurrView} />
			</header>
			<main>
				{currView === "Avatar" ? (
					<Avatar />
				) : currView === "Map" ? (
					<Map />
				) : currView === "Recent" ? (
					<RecentLogs />
				) : null}
			</main>
		</div>
	);
}

export default App;
