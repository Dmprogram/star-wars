import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>This page is secret, only for you</h3>
            </div>
        );
    }
    return <Navigate replace to='/login' />
};

export default SecretPage;