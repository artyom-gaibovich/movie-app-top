import {useMemo} from "react";
import {IMovie} from "../interfaces/movie.interface";
import {SortableKeys} from "../interfaces/movie-filter.interface";


console.log()
export const useSortedMovies = (movies: IMovie[], sort: SortableKeys) => {
    let sortedMovies : IMovie[]= useMemo(() => {
        if (sort) {
            return [...movies.sort((a,b) => a[sort].localeCompare(b[sort]))]
        }
        return sortedMovies
    }, [sort, movies])
    return sortedMovies
}

export const useMovies = (movies: IMovie[], sort: SortableKeys, query: string) => {
    const sortedMovies = useSortedMovies(movies, sort)
    return useMemo(() => {
        return sortedMovies.filter((movie: IMovie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedMovies])
}