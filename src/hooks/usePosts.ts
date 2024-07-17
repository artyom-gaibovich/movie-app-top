import {useMemo} from "react";
import {IMovie} from "../interfaces/movie.interface";


console.log()
export const useSortedMovies = (movies: IMovie[], sort: string) => {
    let sortedMovies : IMovie[]= useMemo(() => {
        if (sort) {
            return [...movies.sort((a,b) => a.[sort].localeCompare(b[sort]))]
        }
        return sortedMovies
    }, [sort, movies])
    return sortedMovies
}

export const useMovies = (movies: IMovie[], sort: "title", query: string) => {
    const sortedMovies = useSortedMovies(movies, sort)
    return useMemo(() => {
        return sortedMovies.filter((movie: IMovie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedMovies])
}