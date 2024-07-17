import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import MovieIdPage from "../pages/MovieIdPage";
import Login from "../pages/Login";
import {AppContext} from "../context/app.context";
import Movies from "../pages/Movies";

const AppRouter = () => {
    const {default: data} = useContext(AppContext)

    if (data) {
        return <h1>Загрузка...</h1>
    }
    const privateRoutes = (
        <Routes>
            <Route path="/" element={<About />} /> {/* Дефолтный маршрут */}
            <Route path="/posts/:id" element={<MovieIdPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Movies />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );

    const publicRoutes = (
        <Routes>
            <Route path="/" element={<Login />} /> {/* Дефолтный маршрут */}
            <Route path="/login" element={<Login />} /> {/* Дефолтный маршрут */}
            <Route path="*" element={<Login />} />
        </Routes>
    );

    //return isAuth ? privateRoutes : publicRoutes;
};

export default AppRouter;
