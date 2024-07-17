import React from 'react';
import classes from "./MyInput.module.css";
import {InputProps} from "./Input.props";
const Input = ({...props} : InputProps) : JSX.Element => {
    return (
        <input className={classes.myInput}/>
    );
};

export default Input;