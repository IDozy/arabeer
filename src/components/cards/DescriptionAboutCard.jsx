import React from "react";
import DynamicCard from "./DynamicCard";

import mision from "/@/assets/images/Misioncerveza.png";
import vision from "/@/assets/images/Visioncerveza.png";

const DescriptionAboutCard = () => {
  return (
    <div style={{marginTop:"5rem" }}>
      <DynamicCard
        title1={"Mision"}
        image={mision}
        text=" Cajamarca, pionera en el mundo de la cerveza artesanal, se estableció en 2014 con una visión audaz y un compromiso inquebrantable con la calidad. A lo largo de más de seis años de dedicación incansable, la empresa ha embotellado con éxito 15,600 litros de cerveza en tres cautivadoras variedades: LA USURPADORA, LA DELIRIO y LA SHOCTA, complementadas por ocho cervezas experimentales que reflejan su espíritu innovador."
        isImageOnRight={false}
        borderTex={"left"}
      />
      <DynamicCard
        title1={"Vision"}
        image={vision}
        text=" Cajamarca, pionera en el mundo de la cerveza artesanal, se estableció en 2014 con una visión audaz y un compromiso inquebrantable con la calidad. A lo largo de más de seis años de dedicación incansable, la empresa ha embotellado con éxito 15,600 litros de cerveza en tres cautivadoras variedades: LA USURPADORA, LA DELIRIO y LA SHOCTA, complementadas por ocho cervezas experimentales que reflejan su espíritu innovador."
        isImageOnRight={true}
        borderTex={"right"}
      />
    </div>
  );
};

export default DescriptionAboutCard;
