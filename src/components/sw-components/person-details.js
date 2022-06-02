import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

function PersonDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="birthYear" label="Bitrh year:" />
      <Record field="height" label="Height:" />
      <Record field="gender" label="Gender:" />
      <Record field="eyeColor" label="Eye Color:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage,
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
