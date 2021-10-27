import React, { useState } from "react";
import Pins from "./Pins";
import LocationInfo from "./LocationInfo";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import "../styles/App.css";

function Map() {
	const [displayInfo, setDisplayInfo] = useState(false);
	const [chosenLocation, setChosenLocation] = useState();
	const { locations, user_lat, user_long, pending } =
		useSelector((state) => state.allLocations);
	// For Google Maps
	const key = { key: process.env.REACT_APP_API_KEY };
	const center = { lat: user_lat, lng: user_long };
	const style = { height: "600px", width: "60%" };
	const zoom = 15;

	return (
		<div className="map-component">
			<div style={style} className="google-map">
				{!pending && (
					<GoogleMapReact
						bootstrapURLKeys={key}
						defaultCenter={center}
						defaultZoom={zoom}>
						{locations.map((location, index) => {
							return (
								<Pins
									key={index}
									lat={location.latitude}
									lng={location.longitude}
									location={location}
									setDisplayInfo={setDisplayInfo}
									setChosenLocation={setChosenLocation}
								/>
							);
						})}

						{
							<Pins
								lat={user_lat}
								lng={user_long}
								user={true}
							/>
						}
					</GoogleMapReact>
				)}
			</div>
			{displayInfo ? (
				<LocationInfo chosenLocation={chosenLocation} />
			) : null}
		</div>
	);
}

export default Map;
