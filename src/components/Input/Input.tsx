import React from 'react';
import classes from "./Input.module.css";
import {InputProps} from "./Input.props";
const Input = ({...children} : InputProps) : JSX.Element => {
    return (
        <input {...children} className={classes.input}/>
    );
};



export default Input;