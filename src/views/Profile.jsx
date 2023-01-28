import React from "react";


import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import withAuth from "../hoc/withAuth";
import {useUser} from "../context/UserContext";


const Profile = () => {
    // Hooks
    const {user} = useUser();

    return (
        <section>
            <div className={classes.profile}>
                <ProfileHeader username={user.username}/>
                <ProfileActions/>
                <ProfileTranslationHistory history={user.translations}/>
                <div className={classes.profileFooter}>
                    <p>Profile</p>
                </div>
            </div>
        </section>
    );
};

export default withAuth(Profile);