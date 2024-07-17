import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface MovieFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
}