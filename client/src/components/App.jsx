import React, { useEffect } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Avatar from "./Avatar";
import Map from "./Map";
import RecentLogs from "./RecentLogs";
import { useDispatch, useSelector } from "react-redux";
import { nearLocationsAction, setLngLat } from "../slices/locationSlice";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { verify } from "../slices/userSlice";

function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.user.auth);

	useEffect(() => {
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						console.log(position.coords.accuracy);
						dispatch(
							setLngLat({
								user_long: position.coords.longitude,
								user_lat: position.coords.latitude,
							})
						);
						dispatch(
							nearLocationsAction({
								lat: position.coords.latitude,
								long: position.coords.longitude,
							})
						);
					},
					(err) => console.log(err),
					{
						timeout: 5000,
						enableHighAccuracy: true,
					}
				);
			}
		};
		dispatch(verify());
		getLocation();
	}, []);

	return (
		<div className="App">
			<Router>
				<header>
					<NavBar />
				</header>
				<Switch>
					<main>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/login" component={LoginForm}></Route>
						<Route exact path="/signup" component={SignUpForm}></Route>
						{auth === false ? (
							<Redirect to="/" />
						) : (
							<>
								<Route exact path="/avatar" component={Avatar}></Route>
								<Route exact path="/map" component={Map}></Route>
								<Route exact path="/logs" component={RecentLogs}></Route>
							</>
						)}
					</main>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
