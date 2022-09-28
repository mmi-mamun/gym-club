import React from 'react';
import './Nav.css'
import logo from '../../images/logo.png'
const Nav = () => {
    return (
        <nav className='nav-container'>
            <img className='img-nav' src={logo} alt="" />
            <h1 className='txt-nav'>ACTIVITY-CLUB</h1>
        </nav>
    );
};

export default Nav;