import React, { useState } from 'react';
import side from '../../Assets/bg.png';
import logo from '../../Assets/fine.jpg';
import "./Header.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div className="contnr">
                <a href="/booking">
                    <img src={side} alt="Overlay " className="overlay-image-1" />
                </a>
                <img src={logo} alt="Overlay " className="overlay-image-2" />
            </div>
            <div className="navbar">

                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div
                    className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li className="dropdown">
                        About
                        <ul className="dropdown-menu">
                            <li>
                                <a href="/about-vns">About Varanasi</a>
                            </li>
                            <li>
                                <a href="#service2">Service 2</a>
                            </li>
                            <li>
                                <a href="#service3">Service 3</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/accomodation">Accomodation</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/">Contact</a></li>
                    {/* <li><a href="/">Booking</a></li> */}
                </ul>
                {/* <div className="logo">Logo</div> */}
            </div>


        </>
    )
}

export default Header