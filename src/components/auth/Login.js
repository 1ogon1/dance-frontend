import React, {useEffect, useState} from "react";
import './Login.css';
import axios from "axios";


export const Login = () => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}