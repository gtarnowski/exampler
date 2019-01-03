import React from "react";
import Planets from "../../components/Planets";
import Species from "../../components/Species";
import Starships from "../../components/Starships";
import Vehicles from "../../components/Vehicles";

const ItemComponent = props => {
  const { categoryName } = props;
  switch (categoryName) {
    case "planets":
      return <Planets {...props} />;
    case "species":
      return <Species {...props} />;
    case "starships":
      return <Starships {...props} />;
    case "vehicles":
      return <Vehicles {...props} />;
  }
};

export default ItemComponent;
