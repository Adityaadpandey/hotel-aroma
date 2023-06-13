import React from 'react'
import "./Menu.css"

// import { Tooltip as ReactTooltip } from 'react-tooltip'


const Menu = () => {
    return (
        <div className="sticky-menu">
            <ul><a href="/">
                <li>
                    <span><i className="fa-solid fa-house-chimney"></i></span>
                    <span className="hover-text">Home</span>
                </li> </a>
                <a href="mailto:adityapandeyadp@gmail.com">
                    <li>
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <span className="hover-text">Mail</span>
                    </li></a>
                <a href="tel:+919415379379">
                    <li>
                        <span><i className="fa-solid fa-phone"></i></span>
                        <span className="hover-text">Phone</span>

                    </li></a>
                <a href="/rooms">
                    <li>
                        <span><i className="fa-regular fa-calendar"></i></span>
                        <span className="hover-text">Book Now</span>

                    </li></a>
            </ul>
        </div>
    )
}

export default Menu