import React from "react";
import {PlanetDetails, PlanetList} from '../sw-components';
import { useNavigate, useParams } from "react-router-dom";
import Row from "../row";

const PlanetsPage = () => { 
    const nav = useNavigate();
    const {id} = useParams();

    return(
        <Row
            left = {<PlanetList onItemSelected={(id) => nav(`/planets/${id}`)} />}
            right = {<PlanetDetails itemId={id} /> } />
    );

};

export default PlanetsPage;