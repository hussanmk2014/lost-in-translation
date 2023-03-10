import React from "react";
import {Navigate} from "react-router-dom";

import {useUser} from "../context/UserContext";


const withoutAuth = Component => props => {
    const {user} = useUser();
    if (user === null) {
        return (<Component {...props}/>);
    }
    return (<Navigate to="/translation" />);
};

export default withoutAuth;