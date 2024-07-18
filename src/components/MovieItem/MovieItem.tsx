import React from 'react';
import { MovieItemProps } from './MovieItem.props';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { IoStar } from 'react-icons/io5'; // Импорт звездочки из react-icons

import styles from './MovieItem.module.css';

const MovieItem = ({ movie, removeMovie }: MovieItemProps) => {
    const navigate = useNavigate();

    return (
        <div className={styles['movie-card']}>
            <div>
                <img src={movie.poster} alt={movie.title} className={styles['movie-poster']} />
            </div>
            <div className={styles['movie-content']}>
                <div className={styles['movie-title']}>
                    {movie.title}
                </div>
                <div className={styles['movie-details']}>
                    <p><strong>Режиссёр:</strong> {movie.director}</p>
                    <p><strong>Год:</strong> {movie.year}</p>
                    <p><strong>Жанр:</strong> {movie.genre.join(', ')}</p>
                    <div className={styles['movie-rating']}>
                        <strong>Рейтинг:</strong>
                        <div className={styles['rating-stars']}>
                            {Array.from({ length: Math.floor(movie.rating) }, (_, index) => (
                                <IoStar key={index} className={styles['star-icon']} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['movie-actions']}>
                    <Button onClick={() => navigate(`/movie/${movie._id}`)}>Открыть</Button>
                    <Button onClick={() => removeMovie(movie)}>Удалить</Button>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;
