import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

function SpecieDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="classification" label="Classification:" />
      <Record field="designation" label="Designation:" />
      <Record field="height" label="Height:" />
      <Record field="skinColors" label="Skin color:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getSpecie,
  getImageUrl: swapiService.getSpecieImage,
});

export default withSwapiService(mapMethodsToProps)(SpecieDetails);
