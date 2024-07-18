import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieIdPage.module.css';
import { IMovie } from "../../interfaces/movie.interface";
import { useFetching } from "../../hooks/useFetching";
import MovieAPI from "../../API/MovieAPI";
import CommentItem from "../../components/CommentItem/CommentItem";
import {IoStar} from "react-icons/io5";

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
        <div className={styles['movieIdPage']}>
            <div className={styles['movieDetails']}>

                <div className={styles['moviePoster']}>

                    <img src={movie.poster} alt={movie.title} />
                </div>
                <div className={styles['movieInfo']}>
                    <h1 className={styles['movie-title']}>{movie.title}</h1>
                    <div className={styles['movie-meta']}>
                        <div className={styles['movie-rating']}>
                            <strong>Рейтинг:</strong>
                            <div className={styles['rating-stars']}>
                                {Array.from({ length: Math.floor(movie.rating) }, (_, index) => (
                                    <IoStar key={index} className={styles['star-icon']} />
                                ))}
                            </div>
                        </div>

                        <p><strong>Год:</strong> {movie.year}</p>
                        <p><strong>Продолжительность:</strong> {movie.runtime} min</p>
                        <p><strong>Жанр:</strong> {movie.genre.join(', ')}</p>
                        <p><strong>Страна:</strong> {movie.country}</p>
                        <p><strong>Язык:</strong> {movie.language}</p>
                        <p><strong>Режиссёр:</strong> {movie.director}</p>
                        <p><strong>Актёры:</strong> {movie.actors.join(', ')}</p>

                    </div>
                </div>

            </div>

            <div className={styles['movie-plot']}>
                <h2>Описание</h2>
                <p>{movie.plot}</p>
            </div>

            <div className={styles['movie-comments']}>

                <h2>Отзывы зрителей</h2>
                {comments.map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default MovieIdPage;
