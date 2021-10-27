import React, { useState, createRef } from 'react';
import '../styles/Auth.css';
import { useDispatch } from "react-redux";
import { userLogin } from '../slices/userSlice';

function LoginForm() {
    const dispatch = useDispatch();
    const usernameOrEmail = createRef();
    const password = createRef();
    
    const login = async (e) => {
        e.preventDefault();
        const loginAction = await dispatch(userLogin({usernameOrEmail: usernameOrEmail.current.value, password: password.current.value}));
        console.log(loginAction);
    }

    return (
    <div className="container" id="container">
            <div className="form-container log-in-container">
                <form onSubmit={login} action="#">
                    <h1>Login</h1>
                    <input type="text" placeholder="Email or Username" ref={usernameOrEmail}/>
                    <input type="password" placeholder="Password" ref={password}/>
                    <button>Log In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>My mizugocchi</h1>
                        <p>welcome home!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
