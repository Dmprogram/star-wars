import React from "react";
import { StarshipList} from '../sw-components';
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => { 
    const hist = useNavigate();
    return(
        <StarshipList 
            onItemSelected={(itemId) => hist(`/starships/${itemId}`)} />
    );
};

export default StarshipsPage;