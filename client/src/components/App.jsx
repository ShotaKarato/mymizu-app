import React, { useState, useEffect } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import Avatar from "./Avatar";
import Map from "./Map";
import RecentLogs from "./RecentLogs";
import { useDispatch } from "react-redux";
import { nearLocationsAction } from "../slices/locationSlice";

function App() {
	const [currView, setCurrView] = useState("Map"); // Change back to Avatar

	const dispatch = useDispatch();

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					dispatch(
						nearLocationsAction({
							lat: position.coords.latitude,
							long: position.coords.longitude,
						})
					);
				}
			);
		}
	}, []);

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
