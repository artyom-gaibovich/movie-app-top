import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import MovieAPI from "../API/MovieAPI";
import {useObserver} from "../hooks/useObserver";
import {IMovie} from "../interfaces/movie.interface";
import {getPageCount} from "../utils/getPageCount";
import {useMovies} from "../hooks/useMovies";
import {IMovieFilter} from "../interfaces/movie-filter.interface";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import MovieForm from "../components/MovieForm/MovieForm";
import MovieFilter from "../components/MovieFilter/MovieFilter";
import Select from "../components/Select/Select";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

const Movies = ({...props}: Record<string, any>)   : JSX.Element => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [filter, setFilter] = useState<IMovieFilter>({sort : "title", query : ''})
    const [isModal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const lastElement: MutableRefObject<any>  = useRef()
    const [fetchMovies, isMoviesLoading, errorMovies ] = useFetching(async () => {
        const {fetchedMovies, totalCount} = await MovieAPI.getAll(limit,page)
        console.log(fetchedMovies, 'ss')
        setMovies([...movies, ...fetchedMovies])
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isMoviesLoading, () => {
        setPage(page + 1)
    })
    useEffect(() => {
        fetchMovies()
    }, [page, limit])

    function createMovie(newMovie: IMovie) {
        setMovies([...movies, newMovie])
        setModal(false)
    }
    const sortedAndSearchMovies = useMovies(movies, filter.sort, filter.query)
    function removeMovie(movie: IMovie)  {
        setMovies(movies.filter(p => p._id !== movie._id ))
    }

    const changePage = (page: number) => {
        setPage(page)
    }
    return (
        <div className="App">
            <Modal visible={isModal} setVisible={setModal}>
                <MovieForm createMovie={createMovie}></MovieForm>
            </Modal>
            <hr style={{margin : '15px 0'}}/>
            <MovieFilter filter={filter} setFilter={setFilter}>

            </MovieFilter>
            <Select value={limit}
                      defaultValue="Количество фильмов на странице"
                      options={[
                          {value : 5, name :'5'},
                          {value : 10, name :'10'},
                          {value : 20, name :'20'},
                          {value : -1, name : 'Показать всё'}
                      ]}
                      setValue={(value : number) => setLimit(value)
                      }></Select>
            {errorMovies && <h1>{JSON.stringify(errorMovies)}</h1>}
            {isMoviesLoading && <h1>Идет загрузка фильмов...</h1>}

            <MovieList removeMovie={removeMovie}
                      movies={sortedAndSearchMovies}
                      title={'Список фильмов'}>
            </MovieList>
            <div ref={lastElement}
                 style={{height : '20px', background: "black"}}></div>
            <Pagination page={page} changePage={() => changePage} totalPages={totalPages}></Pagination>
        </div>
    );
};

export default Movies;