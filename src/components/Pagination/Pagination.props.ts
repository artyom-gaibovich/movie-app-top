import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IMovieFilter} from "../../interfaces/movie-filter.interface";
import {IMovie} from "../../interfaces/movie.interface";

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
    page : number;
    totalPages : number;
    changePage: (page: Number) => void;
}