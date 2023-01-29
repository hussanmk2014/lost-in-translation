import React from "react";

import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";
import classes from "./ProfileTranslationHistory.module.css";


const ProfileTranslationHistory = ({history}) => {
    // Get last 12 translations from the history
    const LAST_TEN_RECORDS = 12;
    const getLastRecords = (array, n) => {
        return array.slice(-n);
    };

    // Make list of translation history with last 12 translations
    const historyList = getLastRecords(history, LAST_TEN_RECORDS).map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation}/>
    );

    return (
        <div className={classes.history}>
            {historyList.length > 0
                ? <h4 className={classes.historyTitle}>Your last 12 translations:</h4>
                : <h4 className={classes.historyTitle}>The translation history is empty</h4>
            }
            <ol>
                {historyList}
            </ol>
        </div>
    );
};

export default ProfileTranslationHistory;