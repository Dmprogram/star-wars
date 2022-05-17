import React from "react";
import {PersonDetails, PersonList} from '../sw-components';
import { useNavigate, useParams } from "react-router-dom";
import Row from "../row";

const PeoplePage = () => {
    const nav = useNavigate();
    const {id} = useParams();

    return(
        <Row
            left = {<PersonList onItemSelected={(id) => nav(`/people/${id}`)} />}
            right = {<PersonDetails itemId={id} /> } />
    );

};

export default PeoplePage;
