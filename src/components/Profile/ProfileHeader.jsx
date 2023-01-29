import React from "react";

import classes from "./ProfileHeader.module.css";


const ProfileHeader = ({username}) => {
    return (
        <section className={classes.ProfileHeader}>
            <h4>Welcome, <span className={classes.profileUsername}>{username || "Stranger"}</span> !</h4>
            <h4>in your personal page</h4>
        </section>
    );
};

export default ProfileHeader;