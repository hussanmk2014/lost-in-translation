import React from "react";

import classes from "./SpanError.module.css";


const SpanError = ({message}) => {
    return (
        <span className={classes.error}>
            <i className="fa fa-exclamation-triangle"></i> {message}
        </span>
    );
};

export default SpanError;