import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import classes from "./TranslationForm.module.css"

import {storageSave} from "../../utils/storage";
import {addTranslationToHistory} from "../../api/translationHistory";
import {translateToSignLanguage} from "../../utils/translationIntoSignLanguage";
import SpanError from "../UI/SpanError";
import {STORAGE_KEY_USER} from "../../consts/storageKey";
import {useUser} from "../../context/UserContext";
import {useTranslation} from "../../context/TranslationContext";



const textToTranslateValidation = {
    maxLength: 40,
    required: true,
    pattern: /^[a-z ']+$/i
};

const TranslationForm = () => {
    // Hooks
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {user, setUser} = useUser();
    const {setTranslation} = useTranslation();
    const [loading, setLoading] = useState(false);

    // Event listeners
    const onSubmit = async ({textToTranslate}) => {
        setLoading(true)
        const [addError] = await addTranslationToHistory(user, textToTranslate);
        if (addError !== null) {
            alert("Please, try later server doesn't respond.");
            return;
        }

        const updatedUser = {
            ...user,
            translations: [...user.translations, textToTranslate]
        };
        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
        setTranslation(translateToSignLanguage(textToTranslate));
        setLoading(false);
    };

    // Render Functions
    const validateTextToTranslate = (() => {
        if (!errors.textToTranslate) {
            return null;
        }
        if (errors.textToTranslate.type === "maxLength") {
            return <SpanError message={`Maximum length is ${textToTranslateValidation.maxLength} symbols.`}/>;
        }

        if (errors.textToTranslate.type === "pattern") {
            return <SpanError message="Please use only english letters ."/>;
        }

        if (errors.textToTranslate.type === "required") {
            return <SpanError message="Text is required."/>;
        }
    })();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <div className={classes.container}>
                    <label htmlFor="textToTranslate">Enter your text to translate</label>
                    <div className={classes.inputContainer}>
                        <i className="fa fa-keyboard-o"></i>
                        <span className={classes.inputPipeSign}>|</span>
                        <input id="textToTranslate"
                               type="text"
                               placeholder="Write the text here"
                               className={classes.inputField}
                               {...register("textToTranslate", textToTranslateValidation)}
                        />
                        <button
                            type="summit"
                            disabled={loading}
                            className={classes.roundButton}
                        >
                            <i className="fa fa-arrow-right"> Go</i>
                        </button>
                    </div>
                    {validateTextToTranslate}
                </div>
            </fieldset>
        </form>
    );
};

export default TranslationForm;