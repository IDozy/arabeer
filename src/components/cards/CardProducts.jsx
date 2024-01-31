import React from "react";
import "./CardService.css";

import eventos from "/@/assets/images/eventos.jpeg";
import modelo from "/@/assets/images/variedades.jpeg";
import variedades from "/@/assets/images/variedades2.jpeg";
import proceso from "/@/assets/images/proceso.jpeg";

const CardProducts = () => {
  const cardValues = [
    {
      img: eventos,
      title: "Eventos",
      texto: "Siempre presentes en los principales eventos de Cajamarca",
    },
    {
      img: modelo,
      title: "Calidad",
      texto: "Siempre certificandonos para llevar la mejor calidad",
    },

    {
      img: variedades,
      title: "Variedad",
      texto: "Disponemos de 8 variedades de cerveza",
    },
    {
      img: proceso,
      title: "Tecnologia",
      texto: "Nuestro laboratorio de alta tecnología",
    },
    {
        img: eventos,
        title: "Eventos",
        texto: "Siempre presentes en los principales eventos de Cajamarca",
      },
      {
        img: modelo,
        title: "Calidad",
        texto: "Siempre certificandonos para llevar la mejor calidad",
      },
  
      {
        img: variedades,
        title: "Variedad",
        texto: "Disponemos de 8 variedades de cerveza",
      },
      {
        img: proceso,
        title: "Tecnologia",
        texto: "Nuestro laboratorio de alta tecnología",
      },
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
    <div className="container-service" style={{marginTop:"5rem"}}>
      <div className="title-service">
        <p></p>
      </div>
      <div className="container-card-service">
        {cardValues.map((card, index) => (
          <RenderCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardProducts;
