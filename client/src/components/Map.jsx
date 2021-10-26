import React, { useState } from 'react'
import LocationInfo from './LocationInfo'

function Map() {
    const [ location, setLocation ] = useState();

    return (
        <div>
            <p>Map</p>
            <LocationInfo/>
        </div>
    )
}

export default Map