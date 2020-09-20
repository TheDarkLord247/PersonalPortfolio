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
            <li><a href = "/">About Me</a></li>
            <li><a href = "/">Links</a></li>
            <li><a href = "/">Contact</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;