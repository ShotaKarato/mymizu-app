import React from 'react';
import '../styles/NavBar.css'

function NavBar(props) {
    const { setCurrView } = props;

    const changeView = (e) => {
       setCurrView(e.target.innerHTML);
    };
    
    return (
        <div>
            <nav id='menu'>
            <input type='checkbox' id='responsive-menu'/>
            <ul>
                <li><a onClick={changeView}>Avatar</a></li>
                <li><a onClick={changeView}>Map</a></li>
                <li><a onClick={changeView}>Recent</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar
