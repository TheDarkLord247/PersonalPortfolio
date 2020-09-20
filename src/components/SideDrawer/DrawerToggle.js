import React from 'react';
import './DrawerToggle.css';

const drawerToggle = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleButtonLine"/>
        <div className="toggleButtonLine"/>
        <div className="toggleButtonLine"/>
    </button>
);

export default drawerToggle;