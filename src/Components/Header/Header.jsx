import React, { useState } from 'react';
import "./Header.css"
import logo from '../../Assets/fine.jpg'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div
                    className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li className="dropdown">
                        <a href="/">About</a>
                        <ul className="dropdown-menu">
            <li>
              <a href="#service1">Service 1</a>
            </li>
            <li>
              <a href="#service2">Service 2</a>
            </li>
            <li>
              <a href="#service3">Service 3</a>
                            </li>
                            </ul>
                    </li>
                    <li><a href="/">Accomodation</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Booking</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header