import React, {useState} from 'react';
import {MovieFormProps} from "./MovieForm.props";
import Input from "../Input/Input";
import {IMovie} from "../../interfaces/movie.interface";
import Button from "../Button/Button";
import {inspect} from "util";
import styles from "./MovieForm.module.css"

const MovieForm = ({ createMovie }: MovieFormProps) => {
    const [movie, setMovie] = useState<IMovie>({
        _id: Date.now(),
        title: '',
        year: 0,
        genre: [],
        rating: 0,
        director: '',
        actors: [],
        plot: '',
        poster: '',
        trailer: '',
        runtime: 0,
        awards: '',
        country: '',
        language: '',
        boxOffice: '',
        production: '',
        website: '',
        reviews: [],
        totalCount: 0
    });

    function addNewMovie(e: React.FormEvent) {
        e.preventDefault();
        createMovie(movie);
        setMovie({
            _id: Date.now(),
            title: '',
            year: 0,
            genre: [],
            rating: 0,
            director: '',
            actors: [],
            plot: '',
            poster: '',
            trailer: '',
            runtime: 0,
            awards: '',
            country: '',
            language: '',
            boxOffice: '',
            production: '',
            website: '',
            reviews: [],
            totalCount: 0
        });
    }

    return (
        <form className={styles.form} onSubmit={addNewMovie}>
            <Input
                type="text"
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                placeholder="Название фильма"
            />
            <Input
                type="number"
                onChange={(e) => setMovie({ ...movie, year: parseInt(e.target.value) })}
                placeholder="Год выпуска"
            />
            {/* Добавьте другие поля ввода для остальных свойств фильма */}
            <Button type="submit">Добавить фильм</Button>
        </form>
    );
};

export default MovieForm;
