import React from 'react';
import "../styles/NavBar.css"

function NavBar(props) {
    const { setCurrView } = props
    
    return (
        <div>
            <nav id='menu'>
            <input type='checkbox' id='responsive-menu'/>
            <ul>
                <li><a>Home</a></li>
                <li><a>Avatar</a></li>
                <li><a>Maps</a></li>
                <li><a>Recents</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar
