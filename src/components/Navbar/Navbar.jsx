import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./Navbar.module.css";

import {useUser} from "../../context/UserContext";


const Navbar = () => {
    const {user} = useUser();

    return (
        <header>
            <div className={classes.container}>
                <nav>
                    <NavLink to="/" className={classes.navLogo}>
                        <img className={classes.navLogoPicture} src="img/logo.png" alt="Logo"/>
                        <p className={classes.navLogoText}>Lost in translation</p>
                    </NavLink>
                    <div className={classes.navUser}>
                        {user ?
                            <NavLink to="/profile"
                                     className={`${classes.navUserLink} ${user ? "" : classes.disabledLink}`}>
                                <span className={classes.navUserName}>{user ? user.username : "Stranger"}</span>
                                <img className={classes.navUserLogo} src="userSymbol.png" alt="User logo"/>
                            </NavLink>
                            : ""
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;