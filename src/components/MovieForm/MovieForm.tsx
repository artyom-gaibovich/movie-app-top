import React, { useState } from 'react';
import { MovieFormProps } from './MovieForm.props';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './MovieForm.module.css';
import {IMovie} from "../../interfaces/movie.interface";

const MovieForm = ({ createMovie }: MovieFormProps) => {
    const [movie, setMovie] = useState<IMovie>({
        _id: 0, reviews: [], totalCount: 0,
        title: '',
        year: 0,
        genre: [''],
        rating: 0,
        director: '',
        actors: [''],
        plot: '',
        poster: '',
        trailer: '',
        runtime: 0,
        awards: '',
        country: '',
        language: '',
        boxOffice: '',
        production: '',
        website: ''
    });

    const addNewMovie = (e: React.FormEvent) => {
        e.preventDefault();
        createMovie(movie);
        setMovie({
            _id: 0, reviews: [], totalCount: 0,
            title: '',
            year: 0,
            genre: [''],
            rating: 0,
            director: '',
            actors: [''],
            plot: '',
            poster: '',
            trailer: '',
            runtime: 0,
            awards: '',
            country: '',
            language: '',
            boxOffice: '',
            production: '',
            website: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: name === 'year' || name === 'runtime' || name === 'rating' ? parseInt(value) : value,
        }));
    };

    return (
        <form className={styles.form} onSubmit={addNewMovie}>
            <Input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Название фильма" className={styles.fullWidth} />
            <Input type="number" name="year" value={movie.year} onChange={handleChange} placeholder="Год выпуска" />
            <Input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Жанр" />
            <Input type="number" name="rating" value={movie.rating} onChange={handleChange} placeholder="Рейтинг" />
            <Button type="submit">Добавить фильм</Button>
        </form>
    );
};

export default MovieForm;
