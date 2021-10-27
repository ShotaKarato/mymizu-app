import React, { useState } from 'react';
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav id='menu'>
            <input type='checkbox' id='responsive-menu'/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/avatar'>Avatar</Link></li>
                <li><Link to='/map'>Find Spots</Link></li>
                <li><Link to='/logs'>Recent</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar
