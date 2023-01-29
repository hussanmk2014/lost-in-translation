import React from 'react';

import classes from "./TranslationOutput.module.css";

import TranslationOutputItem from "./TranslationOutputItem";


const TranslationOutput = ({translated}) => {
    let translationList = [];

    // Make list of translation with signs images
    translated.forEach(
        (word, wordIndex) => translationList.push(<ul className={classes.signsRow} key={wordIndex}>{
            word.map((sign, signIndex) => (
                <TranslationOutputItem key={wordIndex + " - " + signIndex} signSource={sign}/>))
        }</ul>));

    return (
        <div className={classes.card}>
            <div className={classes.cardContent}>
                <div className={classes.rows}>
                    {translationList}
                </div>
            </div>
            <div className={classes.cardFooter}>
                <p>Translation</p>
            </div>
        </div>
    );
};

export default TranslationOutput;