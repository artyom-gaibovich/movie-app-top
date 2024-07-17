import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import MovieAPI from "../API/MovieAPI";
import {IMovie} from "../interfaces/movie.interface";
import Movies from "./Movies";

const MovieIdPage = () => {
    const params = useParams()
    const [movie, setMovie] = useState<IMovie>()
    const [comments, setComments] = useState([])

    const [fetchMovieById, isPostLoading, postError] = useFetching(async () => {

        const fetchedMovie = await MovieAPI.getById(String(params.id))
        setMovie(fetchedMovie)
    })

    const [fetchCommentsById, isCommentsLoading, commentError] = useFetching(async () => {
        const response = await MovieAPI.getCommentsById(Number(params.id))
        setComments(response.data)
    })
    useEffect(() => {
        fetchMovieById()
        fetchCommentsById()
    }, []);

    return (
        <div className="movie-detail">
            <div className="movie-detail__poster">
                <img src={movie?.poster} alt={movie?.title} />
            </div>
            <div className="movie-detail__info">
                <h1 className="movie-detail__title">{movie?.title}</h1>
                <div className="movie-detail__meta">
                    <p><strong>Year:</strong> {movie?.year}</p>
                    <p><strong>Runtime:</strong> {movie?.runtime} min</p>
                    <p><strong>Genre:</strong> {movie?.genre.join(', ')}</p>
                    <p><strong>Country:</strong> {movie?.country}</p>
                    <p><strong>Language:</strong> {movie?.language}</p>
                    <p><strong>Director:</strong> {movie?.director}</p>
                    <p><strong>Actors:</strong> {movie?.actors.join(', ')}</p>
                    <p><strong>Rating:</strong> {movie?.rating}</p>
                </div>
                <div className="movie-detail__plot">
                    <h2>Plot</h2>
                    <p>{movie?.plot}</p>
                </div>
                <div className="movie-detail__comments">
                    <h2>Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="movie-detail__comment">
                            <p>{JSON.stringify(comment)}</p> {/* Adjust with actual comment structure */}
                        </div>
                    ))}
                </div>
                <div className="movie-detail__actions">
                    <a href={movie?.trailer} target="_blank" rel="noopener noreferrer">
                        Watch Trailer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MovieIdPage;