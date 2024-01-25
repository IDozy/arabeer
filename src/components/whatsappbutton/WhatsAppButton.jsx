import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";

import "./Whatsappbutton.css";
import "./ModalWhatsapp.css";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsAppButton = ({
  phoneNumber,
  imageCompany,
  textReplyTime,
  companyName,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [alterValue, setAlterValue] = useState(false);
  const [containerPosition, setContainerPosition] = useState("absolute");

  const toggleModal = () => {
    if (!alterValue) {
      setShowModal(true);
      setContainerPosition("fixed");
    }

    setAlterValue(!alterValue);

    if (alterValue) {
      setTimeout(() => {
        setShowModal(false);
        setContainerPosition("absolute");
      }, 1000);
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="whatsapp-button"
        style={{ border: "none" }}
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ height: "1.5em", width: "1.5em" }}
        />
      </button>
      <div
        className="modal-container"
        style={{
          position: containerPosition,
          height: containerPosition === "absolute" ? "2rem" : "16rem",
        }}
      >
        <div className={`modal ${alterValue ? "active" : "disable"}`}>
          {showModal && (
            <ModalWhatsapp
              onClose={() => {
                setAlterValue(false);
                setShowModal(false);
                setContainerPosition("absolute");
              }}
              imageCompany={imageCompany}
              number={phoneNumber}
              textReplyTime={textReplyTime}
              company={companyName}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
