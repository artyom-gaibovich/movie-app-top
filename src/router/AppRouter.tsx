import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import MovieIdPage from "../pages/MovieIdPage/MovieIdPage";
import {AppContext} from "../context/app.context";
import Movies from "../pages/Movies";

const AppRouter = () : JSX.Element => {
    const {default: data} = useContext(AppContext)

    if (data) {
        return <h1>Загрузка...</h1>
    }
    return (
        <Routes>
            <Route path="/" element={<Movies/>}/> {/* Дефолтный маршрут */}
            <Route path="/movie/:id" element={<MovieIdPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/movie" element={<Movies/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
