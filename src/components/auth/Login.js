import React, {useEffect, useState} from "react";
import './Login.css';
import axios from "axios";


export const Login = () => {
    //TODO:
    //отправить запрос, получить токен, перенаправить на страничку смотря какая роль

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => setUserName(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Отправляем запрос на сервер с данными для входа
        console.log(`Username: ${username}, Password: ${password}`);
        setUserName('');
        setPassword('');

    };

    return (
        <div className="auth bg">
                <div className="auth__main">
                    <div className="auth__logo">
                
                    </div>
                    <form className="auth__form" onSubmit={handleSubmit}>
                        <label>
                            <span className="auth__form-title">Login</span>
                            <input type="text" value={username} onChange={handleUsernameChange} />
                        </label>
                        {/* <br /> */}
                        <label>
                            <span className="auth__form-title">Password </span>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </label>
                        {/* <br /> */}
                        <button className="auth__form-btn" type="submit">Log In</button>
                    </form>
                </div>
            </div>
    );
}