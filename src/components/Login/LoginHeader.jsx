import React from 'react';

import classes from "./LoginHeader.module.css";


const LoginHeader = () => {
    return (
        <div className={classes.LoginHeader}>
            <div className={classes.LoginHeaderPicture}>
                <img className={classes.robot} src="logo192.png" alt=""/>
                <img className={classes.splash} src="Splash.svg" alt=""/>
            </div>
            <div className={classes.LoginHeaderDescription}>
                <h1>Lost in translation</h1>
                <h4>Get started</h4>
            </div>
        </div>
    );
};

export default LoginHeader;