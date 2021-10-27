import React from 'react'
import '../styles/Auth.css'

function LoginForm() {
    return (
    <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
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
