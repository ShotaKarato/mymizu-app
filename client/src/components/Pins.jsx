import React from 'react';
import { Icon } from '@iconify/react';


function Pins(props) {
    const { location, setDisplayInfo, setChosenLocation} = props
 
    const revealInfo = () => {
        setChosenLocation(location);
        setDisplayInfo(true);
    }

    return (
        <div>
           <Icon icon="gis:poi" color="#73BCD4" width="50" height="50" onClick={revealInfo}/>
        </div>
    )
}

export default Pins
