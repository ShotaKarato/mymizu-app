import React, { useState } from 'react';
import Pins from './Pins';
import LocationInfo from './LocationInfo';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import '../styles/App.css'

function Map() {
    const [displayInfo, setDisplayInfo] = useState(false);
    const [chosenLocation, setChosenLocation] = useState();
    const allLocations = useSelector((state) => state.allLocations.locations);

    // For Google Maps
    const key = {key: process.env.REACT_APP_API_KEY}
    const center = { lat: 35.671736, lng: 139.694945 }
    const style = { height: '600px', width: '60%' }
    const zoom = 12

    return (
        <div className="map-component">
            <div style={style} className="google-map">
                    <GoogleMapReact
                    bootstrapURLKeys={key}
                    defaultCenter= {center}
                    defaultZoom={zoom}
                    >
                    { allLocations.map((location, index) => {
                        return (
                            <Pins
                            key={index}
                            lat={location.latitude}
                            lng={location.longitude}
                            location={location}
                            setDisplayInfo={setDisplayInfo}
                            setChosenLocation={setChosenLocation}
                            />
                        )
                    })}
                    </GoogleMapReact>
            </div>
                    {displayInfo ? <LocationInfo chosenLocation={chosenLocation}/> : null}
        </div>
    )
}

export default Map

