import React, {useEffect, useState} from "react";
import './Login.css';
import axios from "axios";


export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState('')
    const [passwordDirty, setPasswordDirty] = useState('')
    const [loginError, setLoginError] = useState('Wrong login!')
    const [passwordError, setPasswordError] = useState('Wrong password!')


    const loginHandler = (e) => { // проверка логина
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => { // проверка пароля
        setPassword(e.target.value)
    }

    const onLoginHandler = async (e) => {
        e.preventDefault()
        let user = {loginName : login};
        console.log(user)

        await axios.post("http://localhost:3001/login", user)
            .then(result => console.log(result.data))
            .catch(error => console.log(error))
        setLogin('')
        window.location = '/login'
        debugger;

    }

    const onPasswordHandler = async (e) => {
        e.preventDefault()
        let passwords = {passwordName: password};
        console.log(passwords)

        await axios.post("http://localhost:3001/login", passwords)
            .then(result => console.log(result.data))
            .catch(error => console.log(error))
        setPassword('')
        window.location = '/login'
    }

    return (
        <div className="loginization_block">
            <form>
                <div>Login</div>
                {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
                <input onSubmit={onLoginHandler}  onChange={e => loginHandler(e)} value={login} name="login" type="text"/>
                <div>Password</div>
                {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onSubmit={onPasswordHandler} onChange={e => passwordHandler(e)} value={password} name="password" type="password"/>
                <button type='submit'>LOG IN</button>
            </form>
        </div>
    )
}