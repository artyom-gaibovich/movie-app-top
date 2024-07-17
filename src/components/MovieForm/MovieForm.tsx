import React, {useState} from 'react';
import {MovieFormProps} from "./MovieForm.props";
import Input from "../Input/Input";
import {IMovie} from "../../interfaces/movie.interface";
import Button from "../Button/Button"; // Подключаем интерфейс IMovie

const MovieForm = ({ createMovie }: MovieFormProps) => {
    const [movie, setMovie] = useState<IMovie>({
        id: Date.now(),
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
            id: Date.now(),
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
        <form onSubmit={addNewMovie}>
            <Input
                type="text"
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                placeholder="Название фильма"
            />
            <Input
                type="number"
                value={movie.year}
                onChange={(e) => setMovie({ ...movie, year: parseInt(e.target.value) })}
                placeholder="Год выпуска"
            />
            {/* Добавьте другие поля ввода для остальных свойств фильма */}
            <Button type="submit">Добавить фильм</Button>
        </form>
    );
};

export default MovieForm;
