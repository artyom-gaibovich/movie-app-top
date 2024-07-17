import React from 'react';
import {SelectProps} from "./Select.props";

const Select = ({options, defaultValue, value, setValue} : SelectProps) => {
    return (
        <select onChange={e => setValue(e.target.value)}
                value={value}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    );
};

export default Select;