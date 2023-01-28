import React, {useEffect} from 'react';

import {useTranslation} from "../context/TranslationContext";
import withAuth from "../hoc/withAuth";
import TranslationHeader from "../components/Translation/TranslationHeader";
import TranslationForm from "../components/Translation/TranslationForm";
import TranslationOutput from "../components/Translation/TranslationOutput";


const Translation = () => {
    // Hooks
    const {translation, setTranslation} = useTranslation();

    // Clear output by reaching this page
    useEffect(() => {
        setTranslation([])
    }, []);

    return (
        <section>
            <TranslationHeader/>
            <div className={classes.backgroundYellow}>
                <TranslationForm/>
            </div>
            <div className={`${classes.backgroundWhite} ${classes.p3}`}>
                <div className={classes.container}>
                    <TranslationOutput translated={translation}/>
                </div>
            </div>
        </section>
    );
};

export default withAuth(Translation);