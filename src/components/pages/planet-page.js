import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row";

function PlanetsPage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={
        <PlanetList
          onItemSelected={(planetId) => nav(`/planets/${planetId}`)}
        />
      }
      right={<PlanetDetails itemId={id} />}
    />
  );
}

export default PlanetsPage;
