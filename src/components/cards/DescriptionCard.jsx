import React from "react";
import DynamicCard from "./DynamicCard";

import logo from "/@/assets/images/camino.jfif";

const DescriptionCard = () => {
  return (
    <DynamicCard
      image={logo}
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto, quos quas iusto excepturi quis debitis veritatis accusamus nihil ad aperiam, optio saepe dolore recusandae. Impedit totam numquam provident sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto, quos quas iusto excepturi quis debitis veritatis accusamus nihil ad aperiam, optio saepe dolore recusandae. Impedit totam numquam provident sed."
      isImageOnRight={true}
    />
  );
};

export default DescriptionCard;
