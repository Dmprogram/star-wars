import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VehicleList, VehicleDetails } from "../sw-components";
import Row from "../row";

function VehiclePage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={
        <VehicleList
          onItemSelected={(vehicleId) => nav(`/vehicles/${vehicleId}`)}
        />
      }
      right={<VehicleDetails itemId={id} />}
    />
  );
}

export default VehiclePage;
