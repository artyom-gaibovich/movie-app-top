import {DetailedHTMLProps, HTMLAttributes, ReactNode, SelectHTMLAttributes} from "react";
import {SortableKeys} from "../../interfaces/movie-filter.interface";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    children? : ReactNode;
    defaultValue : string;
    value : string | number;
    setValue: (value : any) => void;

    options : {value : string | number, name : string}[]
}