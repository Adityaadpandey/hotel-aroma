import React, { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import side from "../../Assets/bg.png";
import logo from "../../Assets/fine.jpg";
import "./Header.css";

const Header = () => {
  let data = localStorage.getItem("image");
  // let name = JSON.parse(localStorage.getItem("user"))
  let dta = localStorage.getItem("Log");

  function rm() {
    googleLogout();
    localStorage.removeItem("image");
    localStorage.removeItem("Name");
    localStorage.removeItem("Log");
    localStorage.removeItem("user");
    window.location.reload(false);
  }
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
        <a href="/">
          <img src={logo} alt="Overlay " className="overlay-image-2" />
        </a>
      </div>
      <div className="navbar">
        <div className="logo">{/* <img src={logo} alt="" /> */}</div>
        <div
          className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="dropdown">
            About
            <ul className="dropdown-menu">
              <li>
                <a href="/about-vns">About Varanasi</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              {/* <li>
                <a href="#service3">Service 3</a>
              </li> */}
            </ul>
          </li>
          <li>
            <a href="/accomodation">Accomodation</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {dta ? (
            <li>
              {/* <button className='btn1' onClick={() => { */}
              {/* localStorage.setItem("cred", false); */}
              {/* googleLogout(); */}
              {/* }}> */}

              <img onClick={rm} className="data" src={data} alt="" />
              {/* </button> */}

              {/* <span>{name.given_name}</span> */}
            </li>
          ) : (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
          {/* <li><a href="/">Booking</a></li> */}
        </ul>
        {/* <div className="logo">Logo</div> */}
      </div>
    </>
  );
};

export default Header;
