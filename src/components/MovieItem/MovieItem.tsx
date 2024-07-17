import React from "react";
import {MovieItemProps} from "./MovieItem.props";
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";


const MovieItem = ({movie, removeMovie} : MovieItemProps) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{movie.id}, {movie.title}</strong>
                <div>
                    {JSON.stringify(movie)}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${movie.id}`)}>Открыть</Button>
                <Button onClick={() => removeMovie(movie)}>Удалить</Button>
            </div>
        </div>
    );
};

export default MovieItem;