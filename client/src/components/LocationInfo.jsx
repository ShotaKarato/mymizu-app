import React from 'react';

function LocationInfo(props) {
    const { chosenLocation } = props;
    console.log(chosenLocation);

    return (
        <div>
            <p>Location</p>
        </div>
    )
}

export default LocationInfo
