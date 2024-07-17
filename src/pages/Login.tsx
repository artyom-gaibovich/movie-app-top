import React from 'react';
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Login = () => {
    const login = (e: Event) => {
        e.preventDefault();
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
           <h1>Страница для логина</h1>
            <form onSubmit={() => login}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;