import React from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";
import logo from "/@/assets/images/ARABER.jpeg";

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      title: "Arabeer",
      items: [
        <img
          style={{ width: "90%", borderRadius:"50%" }}
          src={logo}
          alt="Descripción de la imagen"
          key="imagen"
        />,
      ],
    },
    {
      title: "Nuestros Horarios",
      items: [
        "Lunes - viernes:",
        "7:00 AM - 12:00 PM.",
        "2:00 PM a 6:00 PM.",
        "Sábados:",
        "7:30 AM a 1:00 PM",
      ],
    },
    {
      title: "Contactanos",
      items: [
        "+51 955 445 875",
        "+51 952 066 393",
        "+51 976 631 901",
        
      ],
    },
  ];

  const socialMediaIcons = [
    { icon: faFacebook, description: "Facebook de Arabeer" },
    { icon: faInstagram, description: "Instagram de Arabeer" },
  ];

  const renderLinks = (title, items) => (
    <div className="sb__footer-links-div" key={title}>
      <h4>{title}</h4>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <br />
          <p className="sb__footer-link-item">{item}</p>
        </React.Fragment>
      ))}
    </div>
  );

  const renderSocialMediaIcons = () => (
    <div className="sb__footer-links-div">
      <h4>Siguenos</h4>
      <div className="socialmedia">
        {socialMediaIcons.map((item, index) => (
          <p key={index}>
            <a
              href={getSocialMediaLink(item.icon)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.description}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </p>
        ))}
      </div>
    </div>
  );

  const getSocialMediaLink = (icon) => {
    switch (icon) {
      case faFacebook:
        return "https://web.facebook.com/profile.php?id=100064091890509";
      case faInstagram:
        return "https://www.instagram.com/fadeco_san_martin/";
      default:
        return "#";
    }
  };

  return (
    <footer >
      <div className="custom-shape-divider-top-1705182147">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className ="shape-fill"
          ></path>
        </svg>
        <div className="footer">
          <div className="sb__footer section__padding">
            <div className="sb__footer-links">
              {links.map((link, index) => renderLinks(link.title, link.items))}
              {renderSocialMediaIcons()}
            </div>
            <hr />
            <div className="sb__footer-below">
              <div
                className="sb__footer-copyright"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <p>@ARABEER. Todos los derechos reservados Cajamarca-{year}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
