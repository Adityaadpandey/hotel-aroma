import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img from "../../Assets/fine.jpg"
import './Mid.css'


const Mid = () => {
  return (
    <div className="rooms-section">
      <h2>ACCOMMODATION</h2>
      <h3>Our Rooms & Suites</h3>
      <OwlCarousel className="image-chain" loop autoplay dots={true} responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }}>
        <div className="image-item">
          <img src={img} alt="Room 1" />
          <div className="image-overlay">
            <h3>Room 1</h3>
            <p>This is Just a example to write over on it</p>
          </div>
        </div>
        <div className="image-item">
          <img src={img} alt="Room 2" />
          <div className="image-overlay">
            <h3>Room 2</h3>
            <p>Room description</p>
          </div>
        </div>
        <div className="image-item">
          <img src={img} alt="Room 3" />
          <div className="image-overlay">
            <h3>Room 3</h3>
            <p>Room description</p>
          </div>
        </div>
        <div className="image-item">
          <img src={img} alt="Room 3" />
          <div className="image-overlay">
            <h3>Room 3</h3>
            <p>Room description</p>
          </div>
        </div>
        <div className="image-item">
          <img src={img} alt="Room 3" />
          <div className="image-overlay">
            <h3>Room 3</h3>
            <p>Room description</p>
          </div>
        </div>
        {/* Add more image items as needed */}
      </OwlCarousel>
    </div>


  );
};


export default Mid