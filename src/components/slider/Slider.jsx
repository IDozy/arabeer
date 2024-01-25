import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; 

import img1 from "/@/assets/images/cerveza.jpg";
import img2 from "/@/assets/images/cerveza2.jpg";
import img3 from "/@/assets/images/cerveza.jpg";
import Card from "../autotypewriter/AutoTypewriter";

const FadeWithText = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const images = [img1, img2, img3];

  return (
    <div className="fade-with-text-container">
      {/* Slider Fade */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`}  style={{width:"100%", height:"90vh"}}/>
          </div>
        ))}
      </Slider>

      {/* Contenedor para el texto superpuesto */}
      <div className="text-container">
        <Card/>
      </div>
    </div>
  );
};

export default FadeWithText;
