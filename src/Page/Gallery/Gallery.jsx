import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from "../../Assets/fine.jpg"
import "./Gallery.css"


const Gallery = () => {
    return (
        <>
            <div className="gallery-page">
                <div className="coner">
                    <h1>Gallery</h1>
                    <h2>Take a Look Around
                    </h2>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img} alt="Galle 1" />
                        <div className="img-overlay">
                            <h3>Image 1</h3>
                            <p>Description of Image 1</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery