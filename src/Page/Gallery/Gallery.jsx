import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assets/fine.jpg";
import "./Gallery.css";

const Gal = ({ image, title, desc }) => {
  return (
    <div className="gallery-item">
    <img src={image} alt="Galle 1" />
    <div className="img-overlay">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
  )
};

const Gallery = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Image 1",
      desc: "Description",
    },
    {
      id: 2,
      image: img1,
      title: "Image 2",
      desc: "Description",
    },
    {
      id: 3,
      image: img1,
      title: "Image 3",
      desc: "Description",
    },
    {
      id:4 ,
      image: img1,
      title: "Image 4",
      desc: "Description",
    },
    {
      id: 5,
      image: img1,
      title: "Image 5",
      desc: "Description",
    },
    {
      id: 6,
      image: img1,
      title: "Image 6",
      desc: "Description",
    },
    
  ];
  return (
    <>
      <div className="coner">
        <h1>Gallery</h1>
        <h2>Take a Look Around</h2>
      </div>
      <div className="gallery-page">
        <div className="gallery-container">
          {data.map(proper => (
            <Gal key={proper.id} image={proper.image} title={proper.title} desc={proper.desc}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
