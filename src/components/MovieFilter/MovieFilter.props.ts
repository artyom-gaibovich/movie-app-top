import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IMovieFilter} from "../../interfaces/movie-filter.interface";

export interface MovieFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
    filter: IMovieFilter
    setFilter: (filter: IMovieFilter) => void;
}