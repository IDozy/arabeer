import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import WhatsAppButton from "/@/components/whatsappbutton/WhatsAppButton";


import imagen from "../assets/images/ARABER.jpeg";
import ContactForm from "../components/contact/ContactForm";
import Mapa from "../components/contact/Mapa";

const Home = () => {
  return (
    <>
      <NavBar />
        <ContactForm/>
        <Mapa/>
      <Footer />
      <WhatsAppButton
        imageCompany={imagen}
        number={"+51913896556"}
        companyName={"Arabeer"}
      />
    </>
  );
};

export default Home;
