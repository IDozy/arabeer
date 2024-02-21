import React from "react";
import "./ContactForm.css"

const Mapa = () => {
  return (
    <div className="map-container">
      <iframe
        title="Mapa de ubicación FADECO SAN MARTIN EIRL"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.40607978500302!2d-78.5051851825409!3d-7.183956650011734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25bcd0a17f18f%3A0x279a186f183b1fa6!2sFadeco%20san%20martin!5e0!3m2!1ses!2spe!4v1696651598376!5m2!1ses!2spe"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
