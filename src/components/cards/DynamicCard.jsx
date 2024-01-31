import React from "react";
import "./DynamicCard.css";
import { motion } from "framer-motion";

const DynamicCard = ({ title1, title2, image, text, isImageOnRight }) => {
  const flexDirection = isImageOnRight ? "row" : "row-reverse";

  const descrition = () => (
    <div className="container-card-text">
      <div data-aos="fade-down" data-aos-duration="1000" className="title">
        <h2>{title1}</h2>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="subtitle">
        <h2>{title2}</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        /*
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}*/
        className="text"
      >
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
