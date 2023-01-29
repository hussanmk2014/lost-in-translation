import React from "react";

import classes from "./Profile.module.css";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileActions from "../components/Profile/ProfileActions";
import withAuth from "../hoc/withAuth";
import {useUser} from "../context/UserContext";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";



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
                    <p>My page</p>
                </div>
            </div>
        </section>
    );
};

export default withAuth(Profile);