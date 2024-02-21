import React from "react";
import "./CardService.css";

import eventos from "/@/assets/images/eventos.jpeg";
import modelo from "/@/assets/images/variedades.jpeg";
import variedades from "/@/assets/images/variedades2.jpeg";
import proceso from "/@/assets/images/proceso.jpeg";

const CardService = () => {
  const cardValues = [
    {
      img: eventos,
      title: "Eventos",
      texto: "En Arabeeer, nos enorgullece formar parte de los eventos más destacados de Cajamarca, donde compartimos nuestra pasión por la cerveza artesanal y nos conectamos con nuestra comunidad. Nuestra presencia en estos eventos no solo nos permite presentar nuestras últimas creaciones y ofrecer degustaciones exclusivas, sino que también nos brinda la oportunidad de conocer a nuestros clientes y compartir experiencias inolvidables.",
    },
    {
      img: modelo,
      title: "Calidad",
      texto: "En Arabeeer, Nos esforzamos por alcanzar y superar los más altos estándares de excelencia en todos los aspectos de nuestro proceso de producción. Nos sometemos a rigurosas certificaciones y controles de calidad que garantizan la frescura, pureza y consistencia de nuestros productos. Nuestro compromiso con la calidad es un viaje continuo. Buscando formas de innovar y mejorar para ofrecer a nuestros clientes experiencias de sabor únicas y satisfactorias",
    },

    {
      img: variedades,
      title: "Variedad",
      texto: "En Arabeeer, nos enorgullece ofrecer una amplia gama de opciones para satisfacer todos los gustos y preferencias. Con ocho variedades únicas de cerveza artesanal, cada una cuidadosamente elaborada para ofrecer una experiencia de sabor inigualable, estamos seguros de que encontrarás la cerveza perfecta para cada ocasión. Ven y descubre nuestra emocionante selección de cervezas artesanales y déjate llevar por el mundo del sabor y la variedad.",
    },
    {
      img: proceso,
      title: "Tecnologia",
      texto: "En Arabeeer, estamos a la vanguardia de la innovación en la industria cervecera, y nuestro laboratorio de alta tecnología es un testimonio de nuestro compromiso con la calidad y la excelencia. Equipado con lo último en tecnología y herramientas de análisis avanzadas, nuestro laboratorio es el corazón de nuestro proceso de producción, donde cada lote de cerveza se somete a rigurosas pruebas y controles de calidad para garantizar su integridad y sabor excepcional.",
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
    <div className="container-service">
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

export default CardService;
