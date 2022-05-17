import React from "react";
import { StarshipList, StarshipDetails} from '../sw-components';
import { useNavigate, useParams } from "react-router-dom";
import Row from "../row";

const StarshipsPage = () => { 
    const nav = useNavigate();
    const {id} = useParams();
    
    return(
        <Row 
            left = {<StarshipList onItemSelected={(id) => nav(`/starships/${id}`)} />}
            right = {<StarshipDetails itemId={id} />} />
    );
}

export default StarshipsPage;