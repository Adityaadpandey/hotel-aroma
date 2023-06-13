import React from 'react';

const SuiteCard = ({ suite }) => {
  const { title, description, imageUrl } = suite;

  return (
    <div className="suite-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default SuiteCard;
