import {DetailedHTMLProps, HTMLAttributes, ReactNode, SelectHTMLAttributes} from "react";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    children? : ReactNode;
    defaultValue : string;
    value : string;
    setValue: (value : string) => void;

    options : {value : number, name : string}[]
}