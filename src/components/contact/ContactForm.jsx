import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faClock,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import "./ContactForm.css";
  const ContactForm = () => {
    return (
      <div>
        <section className="contact">
          <div className="content-contact">
            <h2>Contacto</h2>
          </div>
          <div className="container-contact">
            <div className="contactInfo">
              <div className="box-contact">
                <div className="icon-contact">
                  <FontAwesomeIcon icon={faClock} shake />{" "}
                </div>
                <div className="text-contact">
                  <h3>Horarios de Atención</h3>
                  <p> Lunes a Viernes: 7:00 AM - 12:00 PM & 2:00 PM - 5:30 PM </p>
                  <p> Sabados: 7:30 AM - 1:00 PM </p>
                </div>
              </div>
  
              <div className="box-contact">
                <div className="icon-contact">
                  <FontAwesomeIcon icon={faLocationDot} bounce />{" "}
                </div>
                <div className="text-contact">
                  <h3>Dirección</h3>
                  <p>Jr. Alfonso Ugarte 2069 y Av. Héroes del Cenepa c17</p>
                </div>
              </div>
  
              <div className="box-contact">
                <div className="icon-contact">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} beat />
                </div>
                <div className="text-contact">
                  <h3>Célulares / Whatsapp </h3>
                  <p>955445875 / 952066393 / 976631901 </p>
                </div>
              </div>
  
              <div className="box-contact">
                <div className="icon-contact">
                  <FontAwesomeIcon icon={faEnvelope} flip />{" "}
                </div>
                <div className="text-contact">
                  <h3>Email</h3>
                  <p>ventas@fadecosanmartin.com.pe</p>
                  <p>fadecosanmartin321@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form
                action="https://formsubmit.co/6a62b88e5c1681cdb58301b0af5d20ae"
                method="POST"
              >
                <h2>Déjanos aquí tus datos</h2>
                <div className="inputBox">
                  <label htmlFor="name">Su nombre:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required="required"
                    placeholder="Nombres y Apellidos"
                    autoComplete="name"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="email">Su correo electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="required"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="empresa">Su empresa:</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required="required"
                    placeholder="Empresa"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="phone">Su teléfono:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Número de teléfono"
                    autoComplete="tel"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="message">Coméntanos:</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    required="required"
                    placeholder="Escribe tu Mensaje"
                  />
                </div>
               
                <div className="inputBox">
                
                  <input type="submit" name="" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ContactForm;
  