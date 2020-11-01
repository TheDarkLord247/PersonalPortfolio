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
                    <li><a href = "#top">About Me</a></li>
                    <li><a href = "/">Links</a></li>
                    <li><a href = "/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;