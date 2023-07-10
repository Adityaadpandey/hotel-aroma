import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { default as hero1, default as hero2, default as hero3 } from "../../Assets/fine.jpg";
import "./Home.css";
import Mid from './Mid';
import Property from './Property';
import Location from './Location';


const Home = () => {

    const chng = () => {
        window.location.href = '/about-vns'
    }
    return (
        <>
            <div className="hero">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={true}
                    interval={3000}
                    className="hero-page"
                >
                    <div className="slide">
                        <img src={hero1} alt=" 1" />
                        <div className="slide-content">
                            <h2>Aroma Guest House</h2>
                            <p>Experience ultimate comfort and style.</p>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={hero2} alt=" 2" />
                        <div className="slide-content">
                            <h2>Indulge in Exquisite Dining</h2>
                            <p>Indulge in delicious cuisine at our nearby restaurants</p>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={hero3} alt=" 3" />
                        {/* <div className="slide-content">
                            <h2>Best Place to Stay</h2>
                            <p>All the important destinations nearby</p>
                        </div> */}
                    </div>
                    <div className="slide">
                        <img src={hero3} alt=" 3" />
                        {/* <div className="slide-content">
                            <h2>Best Place to Stay</h2>
                            <p>All the important destinations nearby</p>
                        </div> */}
                    </div>
                    <div className="slide">
                        <img src={hero3} alt=" 3" />
                        {/* <div className="slide-content">
                            <h2>Best Place to Stay</h2>
                            <p>All the important destinations nearby</p>
                        </div> */}
                    </div>
                    <div className="slide">
                        <img src={hero3} alt=" 3" />
                        {/* <div className="slide-content">
                            <h2>Best Place to Stay</h2>
                            <p>All the important destinations nearby</p>
                        </div> */}
                    </div>
                </Carousel>
            </div>
            <div className="glnc">
                <h2>Varanasi At a Glance</h2>
                <img alt="" src="https://www.maurya.com/wp-content/themes/hotelier/framework/builder/modules/heading/cap.png" className="img-responsive" />
                <p>Experience the enchanting spiritual heritage and vibrant cultural tapestry of Varanasi, as our hotel provides the perfect gateway to immerse yourself in the sacred Ganges River, ancient temples, and the captivating rituals that unfold along its timeless ghats</p>
                <button onClick={chng}>Find More</button>
            </div>

            <Mid />
            <Property />
            <Location/> 
        </>
    )
}

export default Home