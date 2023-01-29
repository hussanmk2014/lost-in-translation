import React from "react";
import {useNavigate} from "react-router-dom";

import {STORAGE_KEY_USER} from "../../consts/storageKey";
import {useUser} from "../../context/UserContext";
import {storageDelete, storageSave} from "../../utils/storage";
import {clearTranslationHistory} from "../../api/translationHistory";


import classes from "./ProfileActions.module.css";



const ProfileActions = () => {
    // Hooks
    const {user, setUser} = useUser();
    const navigate = useNavigate();

    // Events
    const backToTranslation = () =>{
        navigate("/translation");
    };

    const clearHistory = async () => {
        const [clearError] = await clearTranslationHistory(user.id);
        if (clearError !== null) {
            alert("Please try later to clear");
            return;
        }

        const updatedUser = {
            ...user,
            translations: []
        };
        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
    };

    const logout = () => {
        setUser(null);
        storageDelete(STORAGE_KEY_USER);
        navigate("/");
    };

    return (
        <section>
            <div className={classes.actionsTitle}>
                <h4>Options</h4>
            </div>
            <div className={classes.actionsRow}>
                <button className={classes.actionButton}
                        type="button"
                        onClick={() => backToTranslation()}>
                    Make translation
                </button>
                <button className={classes.actionButton}
                        type="button"
                        onClick={() => clearHistory()}>
                    Clear history
                </button>
                <button className={classes.actionButton}
                        type="button"
                        onClick={() => logout()}>
                    Logout
                </button>
            </div>
        </section>
    );
};

export default ProfileActions;