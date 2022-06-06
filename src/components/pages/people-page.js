import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

function PeoplePage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={
        <PersonList onItemSelected={(humanId) => nav(`/people/${humanId}`)} />
      }
      right={<PersonDetails itemId={id} />}
    />
  );
}

export default PeoplePage;
