import React, {useEffect, useState} from "react";
import './Login.css';


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

    return (
        <div className="Loginization-block">
            <form>
                <div>Login</div>
                {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} name="login" type="text"/>
                <div>Password</div>
                {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} name="password" type="password"/>
                <button type='submit'>LOG IN</button>
            </form>
        </div>
    )
}