import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location-section">
      <h2>Location</h2>
      <h1>Where to Find Us</h1>
      <div className="map-container">
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4140005057965!2d83.0096237!3d25.2816997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31927af46bbd%3A0x45dae32b6cc234a7!2sB%2030%2F98%2C%20Aroma%20Paying%20Guest%20House%2C%20A-1%2C%20Nagwa%20Rd%2C%20Lanka%2C%20Varanasi%2C%20Uttar%20Pradesh%20221005%2C%20India!5e0!3m2!1sen!2sus!4v1627905885723!5m2!1sen!2sus"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
