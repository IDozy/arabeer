import React from "react";
import "./DynamicCard.css";

const DynamicCard = ({ image, text, isImageOnRight }) => {
  const flexDirection = isImageOnRight ? "row" : "row-reverse";

  const descrition = () => (
    <div className="container-card-text">
      <div className="title">
        <h2>titulo1</h2>
      </div>
      <div className="sutitle">
        <h2>titulo2</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );

  return (
    <div className="container-card">
      {isImageOnRight && descrition()}
      <div className="container-card-image">
        <img src={image} alt="Imagen" />
      </div>
      {!isImageOnRight && descrition()}
    </div>
  );
};

export default DynamicCard;
