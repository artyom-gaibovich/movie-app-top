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
        const fetchedMovie = await MovieAPI.getById(Number(params.id))
        setMovie(fetchedMovie)
    })

    /*const [fetchCommentsById, isCommentsLoading, commentError] = useFetching(async () => {
        const response = await MovieAPI.getCommentsById(params.id)
        setComments(response.data)
    })*/

    useEffect(() => {
        () => fetchMovieById
        //fetchCommentsById()
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу фильма c ID {params.id}</h1>
            {isPostLoading
                ? <h1>Идет загрузка фильмов...</h1>
                : <div><h1>{(movie as IMovie).title}</h1><p>{(movie as IMovie).reviews}</p></div>
            }
           {/* <div>
                {comments.map(comment => {
                    return <div style={{margin : '15px 20px'}}>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                })}
            </div>*/}
        </div>
    );
};

export default MovieIdPage;