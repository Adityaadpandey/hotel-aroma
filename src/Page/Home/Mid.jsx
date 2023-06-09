import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import img from "../../Assets/fine.jpg"
import './Mid.css'

const Mid = () => {
  return (
    <>
   <OwlCarousel items={3} margin={8} autoplay ={true} >  
        <div ><img  className="img" src= {img} alt=""/></div>  
           <div><img  className="img" src= {img} alt=""/></div>  
           <div><img  className="img" src= {img} alt=""/></div>  
           {/* <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>   */}
           {/* <div><img className="img" src= {'assets/img/img5.jpg'}/></div>   */}
           <div><img className="img" src= {img} alt=""/></div>  
           <div><img className="img" src= {img} alt=""/></div>  
      </OwlCarousel>  
    </>
  )
}

export default Mid