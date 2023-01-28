import React from "react";


import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";


const ProfileTranslationHistory = ({history}) => {
    // Get last 10 translations from history
    const LAST_TEN_RECORDS = 10;
    const getLastRecords = (array, n) => {
        return array.slice(-n);
    };

    // Fill list of translation history with last 10 translations
    const historyList = getLastRecords(history, LAST_TEN_RECORDS).map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation}/>
    );

    return (
        <div className={classes.history}>
            {historyList.length > 0
                ? <h4 className={classes.historyTitle}>Your last 10 translations:</h4>
                : <h4 className={classes.historyTitle}>There is no translation history yet &#128546;<br></br>Go and translate something!</h4>
            }
            <ol>
                {historyList}
            </ol>
        </div>
    );
};

export default ProfileTranslationHistory;