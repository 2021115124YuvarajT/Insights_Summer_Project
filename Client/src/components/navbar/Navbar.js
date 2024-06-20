import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './insight_logo.png';
import "./navbar.css"
const Navbar = () => {
    const NavStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bolder' : 'larger',
            color: isActive ? '#F8CF50' : 'white',
        };
    };

    return (
        <nav className='wrapper'>
            <nav className='primary-nav'>
                <ul>
                    <li><img src={logo} alt='Insight Logo' /></li>
                    <li>
                        <p class='tagline'>Essence of Indian Traditional Science and Math</p>
                    </li>
                </ul>
            </nav>
            <nav className='secondary-nav'>
                <ul>
                    <li><NavLink style={NavStyle} to='/Homepg'>HOME</NavLink></li>
                    <li><NavLink style={NavStyle} to='/place_val'>PLACE VALUE SYSTEM</NavLink></li>
                    <li><NavLink style={NavStyle} to='/mul'>MULTIPLICATION</NavLink></li>
                    <li><NavLink style={NavStyle} to='/division'>DIVISION</NavLink></li>
                    <li><NavLink style={NavStyle} to='/divs'>DIVISIBLITY</NavLink></li>
                    <li><NavLink style={NavStyle} to='/squar'>SQUARRING</NavLink></li>
                    <li><NavLink style={NavStyle} to='/squar_root'>SQUARE ROOT</NavLink></li>
                    <li><NavLink style={NavStyle} to='/code'>INDIAN NUMERIC CODE</NavLink></li>
                    <li><NavLink style={NavStyle} to='/misc'>MISCELLANOUS </NavLink></li>
                    <li><NavLink style={NavStyle} to = '/logout' >LOGOUT</NavLink></li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;
