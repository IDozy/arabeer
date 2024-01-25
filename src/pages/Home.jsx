import React from "react";
import NavBar from "../components/navbar/NavBar";

import Carousel from "../components/slider/Slider";
import Footer from "../components/footer/Footer";
import DescriptionCard from "/@/components/cards/DescriptionCard";
import CounterElement from "/@/components/count/Counter";
import CardService from "/@/components/cards/CardService";
import WhatsAppButton from "/@/components/whatsappbutton/WhatsAppButton";

import imagen from "../assets/images/ARABER.jpeg";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <DescriptionCard />
      <CounterElement />
      <CardService />
      <Footer />
      <WhatsAppButton
        imageCompany= {imagen}
        number={"+51913896556"}
        companyName ={'Arabeer'}
      />
    
    </>
  );
};

export default Home;
