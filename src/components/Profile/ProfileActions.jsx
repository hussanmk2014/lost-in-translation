import React from "react";
import {useNavigate} from "react-router-dom";

import {STORAGE_KEY_USER} from "../../consts/sorageKey";
import {useUser} from "../../context/UserContext";
import {storageDelete, storageSave} from "../../utils/storage";
import {clearTranslationHistory} from "../../api/translationHistory";



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
            alert("Please, try later");
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
            <div className="actionsTitle">
                <h4>From here you can:</h4>
            </div>
            <div className="actionsRow">
                <button className="actionButton"}
                        type="button"
                        onClick={() => backToTranslation()}>
                    Back to translation
                </button>
                <button className= "actionButton"
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