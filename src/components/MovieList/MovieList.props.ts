import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IMovie} from "../../interfaces/movie.interface";

export interface MovieListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
    movies : IMovie[]
    removeMovie: (movie : IMovie) => void;
    title: string;
}