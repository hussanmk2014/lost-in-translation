import React from "react";


const ProfileHeader = ({username}) => {
    return (
        <section className={classes.ProfileHeader}>
            <h4>Hey, <span className={classes.profileUsername}>{username || "Stranger"}</span> !</h4>
            <h4>It is your profile.</h4>
        </section>
    );
};

export default ProfileHeader;