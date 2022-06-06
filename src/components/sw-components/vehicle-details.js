import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

function VehicleDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="length" label="Length:" />
      <Record field="crew" label="Crew:" />
      <Record field="passengers" label="Passengers:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getVehicle,
  getImageUrl: swapiService.getVehicleImage,
});

export default withSwapiService(mapMethodsToProps)(VehicleDetails);
