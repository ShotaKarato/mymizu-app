import React from "react";
import LocationInfo from "./LocationInfo";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

function Map() {
	const allLocations = useSelector(
		(state) => state.allLocations.locations
	);
	const key = { key: process.env.REACT_APP_API_KEY };
	const center = { lat: 35.671736, lng: 139.694945 };
	const style = { height: "100vh", width: "100%" };
	const zoom = 12;

	return (
		<div style={style}>
			<GoogleMapReact
				bootstrapURLKeys={key}
				defaultCenter={center}
				defaultZoom={zoom}>
				{allLocations.map((location) => {
					return (
						<LocationInfo
							lat={location.latitude}
							lng={location.longitude}
						/>
					);
				})}
			</GoogleMapReact>
		</div>
	);
}

export default Map;
