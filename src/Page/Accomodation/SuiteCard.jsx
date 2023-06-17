import React, { useState,useRef,useEffect } from "react";

const SuiteCard = ({ suite }) => {
  const { title, description, imageUrl, amminities } = suite;
  const myArray = Object.values(amminities);

  const [isBlur, setIsBlur] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const runFunction = () => {
    console.log(typeof amminities);
    setIsBlur(true);
    setIsPopupOpen(true);

    // Simulating the function running for 3 seconds
  };
  const clos = () => {
    setIsBlur(false);
    setIsPopupOpen(false);
  };
  const functionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (functionRef.current && !event.target.closest('.popup')) {
        clearInterval(functionRef.current);
        console.log('Function cancelled');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dlx = () => {
    localStorage.removeItem("room");
    localStorage.setItem("room", title);
    // console.log(localStorage.getItem("room"));
    window.location.href = "/booking";

  };


  return (
    <div className="suite-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <button onClick={runFunction} className="btn">
          Learn More
        </button>
        <button className="btn" onClick={dlx}>Book Now</button>
        {isBlur && <div className="blur-background"></div>}

        {isPopupOpen && (
          <div className="popup">
            <h3>Amminities</h3>
            {myArray.map((value, index) => (
              <div key={index}>
                {/* {""} */}
                <i className="fas fa-check"></i>
                {value}
              </div>
            ))}
            <button onClick={clos}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuiteCard;
