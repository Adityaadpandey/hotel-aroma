import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css"
import hero1 from "../../Assets/fine.jpg"
import hero2 from "../../Assets/fine.jpg"
import hero3 from "../../Assets/fine.jpg"
import Mid from './Mid';


const Home = () => {
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

            <Mid />
        </>
    )
}

export default Home