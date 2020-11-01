import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show)
    {
        drawerClasses = 'sideDrawer open';
    }

    return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href = "#top">About Me</a></li>
            <li><a href = "#links">Links</a></li>
            <li><a href = "#contact">Contact</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;