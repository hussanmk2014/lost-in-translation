import React from 'react';
import {useNavigate} from "react-router-dom";

import classes from "./Login.module.css";

import LoginHeader from "../components/Login/LoginHeader";
import LoginForm from "../components/Login/LoginForm";
import withoutAuth from "../hoc/withoutAuth";

const Login = () => {
    const navigate = useNavigate();
    const onSuccess = () => {
        navigate("/translation");
    };

    return (
        <section>
            <LoginHeader/>
            <div className={classes.offsetContainer}>
                <LoginForm success={onSuccess}/>
            </div>
        </section>
    );
};

export default withoutAuth(Login);