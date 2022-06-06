import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpecieList, SpecieDetails } from "../sw-components";
import Row from "../row";

function SpeciePage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={
        <SpecieList
          onItemSelected={(specieId) => nav(`/species/${specieId}`)}
        />
      }
      right={<SpecieDetails itemId={id} />}
    />
  );
}

export default SpeciePage;
