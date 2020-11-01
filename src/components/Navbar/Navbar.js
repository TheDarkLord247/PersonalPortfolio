import React from 'react';
import './Navbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle.js';

const navbar = props => (
    <header className="navhead">
        <nav className="navbar">
            <div className="NavbarTog">
                <DrawerToggle click={props.drawerHandler}/> 
            </div>
            <div className="navList">
                <ul>
                    <li><a href = "/#aboutmelink">About Me</a></li>
                    <li><a href = "/#links">Links</a></li>
                    <li><a href = "/#links">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;