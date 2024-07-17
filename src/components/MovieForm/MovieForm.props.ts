import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IMovieFilter} from "../../interfaces/movie-filter.interface";
import {IMovie} from "../../interfaces/movie.interface";

export interface MovieFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
    visible?: boolean;
    createMovie : (movie : IMovie) => void;
}