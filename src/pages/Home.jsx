import React from "react";
import NavBar from "../components/navbar/NavBar";

import Carousel from "../components/slider/Slider";
import Footer from "../components/footer/Footer";
import DescriptionHomeCard from "/@/components/cards/DescriptionHomeCard";
import CounterElement from "/@/components/count/Counter";
import CardService from "/@/components/cards/CardService";
import WhatsAppButton from "/@/components/whatsappbutton/WhatsAppButton";
import { Helmet } from "react-helmet";

import imagen from "../assets/images/ARABER.jpeg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Arabeer- Inicio</title>
        <meta
          name="description"
          content="Bienvenido a ARABEER. Más de 10 años de experiencia en elaboracion de cerveza artezanal."
        />
      </Helmet>
      <NavBar />
      <Carousel />
      <DescriptionHomeCard />
      <CounterElement />
      <CardService />
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
