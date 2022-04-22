import React from "react";
import { StarshipList} from '../sw-components';
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => { 
    const nav = useNavigate();
    return(
        <StarshipList 
            onItemSelected={(id) => nav(id)} />
    );
};

export default StarshipsPage;