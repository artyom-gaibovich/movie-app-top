import React from 'react';
import styles from './Select.module.css';
import { SelectProps } from './Select.props';

const Select = ({ options, defaultValue, value, setValue } : SelectProps) => {
    return (
        <div className={styles['custom-select-wrapper']}>
            <select
                className={styles["custom-select"]}
                onChange={(e: any) => setValue(e.target.value)}
                value={value}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
