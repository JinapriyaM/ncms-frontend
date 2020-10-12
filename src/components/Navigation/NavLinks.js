import React from 'react';

import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/doctor" >Doctor</NavLink>
            <NavLink to="/sign">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </li>
    </ul>

}

export default NavLinks;