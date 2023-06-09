import React from 'react'
import "./Menu.css"

// import { Tooltip as ReactTooltip } from 'react-tooltip'


const Menu = () => {
    return (
        <div className="sticky-menu">
            <ul>
                <li>
                    <span><a href="/"><i class="fa-solid fa-house-chimney"></i> </a></span>
                    <span className="hover-text">Home</span>
                </li>
                <li>
                    <span><a href="mailto:adityapandeyadp@gmail.com"><i class="fa-solid fa-envelope"></i></a></span>
                    <span className="hover-text">Mail</span>
                </li>
                <li>
                    <span><a href="tel:+919415379379"><i class="fa-solid fa-phone"></i></a></span>
                    <span className="hover-text">Phone</span>
                
                </li>
                <li>
                    <span><a href="/rooms"><i class="fa-regular fa-calendar"></i></a></span>
                    <span className="hover-text">Book Now</span>
                
                </li>
            </ul>
        </div>
    )
}

export default Menu