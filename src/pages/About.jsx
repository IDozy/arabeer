import React from "react";
import NavBar from "../components/navbar/NavBar";

import Footer from "../components/footer/Footer";

import WhatsAppButton from "/@/components/whatsappbutton/WhatsAppButton";

import imagen from "../assets/images/ARABER.jpeg";
import DescriptionAboutCard from "../components/cards/DescriptionAboutCard";

const Home = () => {
  return (
    <>
      <NavBar />
      <DescriptionAboutCard />

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
