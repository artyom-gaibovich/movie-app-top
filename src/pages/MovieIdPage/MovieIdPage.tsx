import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieIdPage.module.css';
import {IMovie} from "../../interfaces/movie.interface";
import {useFetching} from "../../hooks/useFetching";
import MovieAPI from "../../API/MovieAPI";
import CommentItem from "../../components/CommentItem/CommentItem"; // Import CSS module

const MovieIdPage = () => {
    const params = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [comments, setComments] = useState<any[]>([]); // Update with actual comment type if available

    const [fetchMovieById, isPostLoading, postError] = useFetching(async () => {
        try {
            const fetchedMovie = await MovieAPI.getById(String(params.id));
            setMovie(fetchedMovie);
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    });

    const [fetchCommentsById, isCommentsLoading, commentError] = useFetching(async () => {
        try {
            const response = await MovieAPI.getCommentsById(Number(params.id));
            setComments(response.data); // Assuming comments are returned as data property in response
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    });

    useEffect(() => {
        fetchMovieById();
        fetchCommentsById();
    }, []);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className={styles['movie-detail']}>
            <div className={styles['movie-poster']}>
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className={styles['movie-info']}>
                <h1 className={styles['movie-title']}>{movie.title}</h1>
                <div className={styles['movie-meta']}>
                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Runtime:</strong> {movie.runtime} min</p>
                    <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
                    <p><strong>Country:</strong> {movie.country}</p>
                    <p><strong>Language:</strong> {movie.language}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
                    <p><strong>Rating:</strong> {movie.rating}</p>
                </div>





            </div>


            <div className={styles['movie-plot']}>
                <h2>Plot</h2>
                <p>{movie.plot}</p>
            </div>



            <div className={styles['movie-comments']}>
                <div className={styles['movie-actions']}>
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                        Watch Trailer
                    </a>
                </div>

                <h2>Comments</h2>
                {comments.map((comment, index) => (
                    <CommentItem comment={comment}>
                    </CommentItem>
                ))}
            </div>
        </div>
    );
};

export default MovieIdPage;
