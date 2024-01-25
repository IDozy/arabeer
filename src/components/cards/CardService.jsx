import React from "react";
import "./CardService.css";

import img1 from "/@/assets/images/corazon.jpg";

const CardService = () => {
  const cardValues = [
    { img: img1, title: "contabilidad", texto: "texto" },
    { img: img1, title: "logistica", texto: "texto2" },
    { img: img1, title: "ventas", texto: "texto3" },
    { img: img1, title: "ventas", texto: "texto3" },
    { img: img1, title: "ventas", texto: "texto3" },
    
    
  ];

  const RenderCard = ({ card }) => {
    return (
      <div className="card__service">
        <figure>
          <img src={card.img} alt="" />
        </figure>
        <div className="service-contenido">
          <h3>{card.title}</h3>
          <p>{card.texto}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container-service">
      <div className="title-service">
        <p>Servicio</p>
      </div>
      <div className="container-card-service">
        {cardValues.map((card, index) => (
          <RenderCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardService;
