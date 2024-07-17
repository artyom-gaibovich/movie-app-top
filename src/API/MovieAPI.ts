import axios from "axios"
import {IMovie} from "../interfaces/movie.interface";

export default class MovieAPI {
    static async getAll(limit = 10, page = 1) {
        const {data: fetchedMovies, headers: totalCount} = await axios.get<IMovie[]>('http://localhost:3200/api/movie/', {
            params : {
                _limit : limit,
                _page : page
            }
        })
        return {
            fetchedMovies : fetchedMovies,
            totalCount: totalCount['x-total-count']
        }
    }

    static async getById(id : number) {
        const {data: movie} = await axios.get<IMovie>('http://localhost:3200/api/movie/')
        return movie
    }

   /* static async getCommentsById(id : number) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }*/

}