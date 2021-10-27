import React from 'react';
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div>
            <nav id='menu'>
            <input type='checkbox' id='responsive-menu'/>
            <ul>
                <li><Link to='/'>Avatar</Link></li>
                <li><Link to='/map'>Find Spots</Link></li>
                <li><Link to='/logs'>Recent</Link></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar
