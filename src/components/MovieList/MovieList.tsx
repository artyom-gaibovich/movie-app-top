import React from "react";
import {MovieListProps} from "./MovieList.props";
import MovieItem from "../MovieItem/MovieItem";


const MovieList = ({movies, removeMovie, title} : MovieListProps) => {
    if (!movies.length) {
        return <h2 style={{textAlign : 'center'}}>Фильмы не найдены</h2>
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {movies.map(movie => {
                return <MovieItem removeMovie={removeMovie} movie={movie} key={movie._id}></MovieItem>
            })}
        </div>
    );
};

export default MovieList