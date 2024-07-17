import axios from "axios"
import {IMovie} from "../interfaces/movie.interface";
import {mockComments} from "./MockComments";

export default class MovieAPI {
    static async getAll(limit = 10, page = 1) {
        const {data: fetchedMovies, headers: totalCount} = await axios.get<IMovie[]>('http://localhost:3200/api/movie')
        console.log(fetchedMovies)
        return {
            fetchedMovies : fetchedMovies,
            totalCount: totalCount['x-total-count']
        }
    }

    static async getById(_id : string) {
        const {data: movie} = await axios.get<IMovie>(`http://localhost:3200/api/movie/${_id}`)
        return movie
    }

    static async getCommentsById(_id : number) {
        /*_id=1;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${_id}/comments`)
        return response*/
        return {data : mockComments}
    }
    static async createMovie(movie : IMovie) {
        const {data: newMovie} = await axios.post<IMovie>("https://localhost:3200/api/movie/create", {
            movie
        })
        return newMovie
    }

}