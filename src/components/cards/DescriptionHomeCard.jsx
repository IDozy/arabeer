import React from "react";
import DynamicCard from "./DynamicCard";

import logo from "/@/assets/images/modelo2.jpeg";

const DescriptionHomeCard = () => {
  return (
    <DynamicCard
      title1={"Arango Beer"}
      title2={"Cajamarca"}
      image={logo}
      text=" Cajamarca, pionera en el mundo de la cerveza artesanal, se estableció en 2014 con una visión audaz y un compromiso inquebrantable con la calidad. A lo largo de más de seis años de dedicación incansable, la empresa ha embotellado con éxito 15,600 litros de cerveza en tres cautivadoras variedades: LA USURPADORA, LA DELIRIO y LA SHOCTA, complementadas por ocho cervezas experimentales que reflejan su espíritu innovador."
      isImageOnRight={true}
     
    />
  );
};

export default DescriptionHomeCard;
