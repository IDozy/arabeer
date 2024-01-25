import React, { useState, useEffect } from "react";
import "./ModalWhatsapp.css";

import fondoWhatsapp from "/@/assets/images/fondowhatsapp.png";


const ModalWhatsapp = ({ onClose, number, imageCompany, company }) => {
  const [message, setMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [whatsappURL, setWhatsappURL] = useState("");

  const time = new Date().getHours() + ":" + new Date().getMinutes();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const phoneNumber = { number };
      const encodedPhoneNumber = encodeURIComponent(phoneNumber);
      const encodedMessageText = encodeURIComponent(message);

      if (isMobile) {
        setWhatsappURL(
          `https://wa.me/${encodedPhoneNumber}?text=${encodedMessageText}`
        );
      } else {
        setWhatsappURL(
          `https://web.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessageText}`
        );
      }
    };

    handleResize(); // Llama a la función al montar el componente para establecer la URL inicial

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [message]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleSend = () => {
    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className={`modal-content ${isAnimating ? "disable" : ""}`}>
      <div className="modal-section-header ">
        {imageCompany ? (
          <img className="img-modal" src={imageCompany} alt="" />
        ) : (
          <div className="suport">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
            </svg>
          </div>
        )}
        <div className="header-whatsapp">
          {company ? <h3>{company}</h3> : <h3>Suport</h3>}
          <p>Normalmente responde en 1 dia</p>
        </div>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
      </div>

      <div
        className="section-whatsapp"
        style={{ backgroundImage: `url(${fondoWhatsapp})` }}
      >
        <div className="section-chat">
          <span className="triangle-chat"></span>
          {company ? (
            <span className="chat-title">{company}</span>
          ) : (
            <span className="chat-title">Suport</span>
          )}
          <p className="chat-text">Hola! 👋🏼¿Que podemos hacer por ti?</p>
          <span className="chat-time">{time}</span>
        </div>
      </div>

      <div className="modal-section-message">
        <input
          className="message-box"
          placeholder="Escribe tu duda aquí"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <svg
          className="enviar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={handleSend}
          rel="noopener noreferrer"
        >
          <path
            d="m2.721 2.051 15.355 7.566a.5.5 0 0 1 0 .897L2.72 18.08a.5.5 0 0 1-.704-.576l1.521-5.745a.5.5 0 0 1 .401-.365l6.881-1.147a.25.25 0 0 0 .188-.146l.018-.06a.25.25 0 0 0-.15-.272l-.056-.016L3.9 8.6a.5.5 0 0 1-.4-.365L2.016 2.628a.5.5 0 0 1 .704-.577Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ModalWhatsapp;
