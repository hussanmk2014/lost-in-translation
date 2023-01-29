import React from 'react';

import classes from "./TranslationHeader.module.css";


const TranslationHeader = () => {
    return (
        <section className={classes.TranslationHeader}>
            <img src={`/img/Logo-Hello.png`} alt="RobotHello" className={classes.robotHello}/>

        </section>
    );
};

export default TranslationHeader;