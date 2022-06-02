import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

function StarshipDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="length" label="Length:" />
      <Record field="cargoCapacity" label="Cargo capacity:" />
      <Record field="costInCredits" label="Cost:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
