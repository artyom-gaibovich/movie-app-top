import React from "react";
import {MovieItemProps} from "./MovieItem.props";
import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom";


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