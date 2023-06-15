import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../../Assets/fine.jpg";
import "./Property.css";

const Mid = () => {
  return (
    <div className="properties-section">
      {/* <h2>ACCOMMODATION</h2> */}
      <h3>Our Properties</h3>
      <OwlCarousel
        className="image-chain"
        loop
        autoplay
        dots={true}
        responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }}
      >
        <div className="image-item">
          <a href="/">
            <img src={img} alt="Room 1" />
            <div className="image-overlay">
              <h3>Property 1</h3>
              <p>This is Just a example to write over on it</p>
            </div>
          </a>
        </div>
        <div className="image-item">
          <a href="/">
            <img src={img} alt="Room 1" />
            <div className="image-overlay">
              <h3>Property 1</h3>

              <p>This is Just a example to write over on it</p>
            </div>
          </a>
        </div>
        <div className="image-item">
          <a href="/">
            <img src={img} alt="Room 3" />
            <div className="image-overlay">
              <h3>Property 3</h3>
              <p>Property description</p>
            </div>
          </a>
        </div>

        {/* Add more image items as needed */}
      </OwlCarousel>
    </div>
  );
};

export default Mid;
