import React from 'react';

function LocationInfo(props) {
    const { chosenLocation } = props;
    const noImg = "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png"
    const imgResult = chosenLocation.photo_url;

    return (
        <div className="location-info">
            <h3>{chosenLocation.name}</h3>
            <p>{chosenLocation.address}</p>
            <img 
                src={imgResult === null ? noImg : imgResult}
                alt="location image"
            />
            <br/>
            <button id="refill-button"> Refill Here </button>
        </div>
    )
}

export default LocationInfo
