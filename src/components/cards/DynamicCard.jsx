import React from "react";
import "./DynamicCard.css";


const DynamicCard = ({ title1, title2, image, text, isImageOnRight, borderTex }) => {
 

  const descrition = () => (
    <div className="container-card-text">
      <div data-aos="fade-down" data-aos-duration="1000" className="title">
        <h2>{title1}</h2>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="subtitle">
        <h2>{title2}</h2>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className={`text ${borderTex}`}>
        <p>{text}</p>
      </div>
    </div>
  );

  return (
    <div className="container-card">
      {isImageOnRight && descrition()}
      <div className={`container-card-image ${borderTex ? "imgabout": " "}`}>
        <img src={image} alt="Imagen" />
      </div>
      {!isImageOnRight && descrition()}
    </div>
  );
};

export default DynamicCard;
