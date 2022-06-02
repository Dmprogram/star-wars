import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

function PeoplePage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={<PersonList onItemSelected={(id) => nav(`/people/${id}`)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
}

export default PeoplePage;
