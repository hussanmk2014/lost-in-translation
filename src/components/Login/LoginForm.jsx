import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import classes from "./LoginForm.module.css";

import {storageSave} from "../../utils/storage";
import SpanError from "../UI/SpanError";
import {STORAGE_KEY_USER} from "../../consts/storageKey";
import {useUser} from "../../context/UserContext";
import {loginUser} from "../../api/user";



const usernameConfig = {
    minLength: 3,
    required: true,
    pattern: /^[a-z]+$/i
}

const LoginForm = ({success}) => {
    // Hooks
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {setUser} = useUser();

    // Local state
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    // Events Handlers
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse);
            success();
        }
        setLoading(false);
    };

    // Render Functions
    const validateUsername = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "pattern") {
            return <SpanError message="Please just only english letters for username without special characters or numbers."/>;
        }
        if (errors.username.type === "required") {
            return <SpanError message="User name is required"/>;
        }
        if (errors.username.type === "minLength") {
            return <SpanError message={`User name is too short (min ${usernameConfig.minLength} characters)`}/>
        }
    })();

    return (
        <form id="login-form" action="" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <label htmlFor="login-input">please enter your name</label>
                        <div className={classes.inputContainer}>
                            <i className="fa fa-keyboard-o"></i>
                            <span className={classes.inputPipeSign}>|</span>
                            <input id="login-input"
                                   type="text"
                                   placeholder="Write your name here"
                                   className={classes.inputField}
                                   {...register("username", usernameConfig)}
                            />
                            <button
                                type="summit"
                                disabled={loading}
                                className={classes.roundButton}
                            >
                                <i className="fa fa-arrow-right"> Go</i>
                            </button>
                        </div>
                        {loading }
                        {validateUsername}
                        {apiError && <SpanError message={apiError}/>}
                    </div>
                    <div className={classes.cardFooter}><p></p></div>
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;