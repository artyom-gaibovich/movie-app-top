import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <h1>Загрузка...</h1>
    }
    const privateRoutes = (
        <Routes>
            <Route path="/" element={<About />} /> {/* Дефолтный маршрут */}
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
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

    return isAuth ? privateRoutes : publicRoutes;
};

export default AppRouter;
