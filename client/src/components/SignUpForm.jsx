import React from 'react'
import '../styles/Auth.css'

function SignUpForm() {
    return (
        <div className="container" id="container">
        <div className="form-container log-in-container">
            <form action="#">
                <h1> Register </h1>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1>My mizugocchi</h1>
                    <p>adopt your own PET bottle!</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUpForm
