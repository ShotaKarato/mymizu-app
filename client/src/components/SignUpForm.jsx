import React, {createRef} from 'react'
import '../styles/Auth.css'
import { useDispatch } from "react-redux";
import { userSignUp } from '../slices/userSlice';


function SignUpForm() {
    const username = createRef();
    const email = createRef();
    const password = createRef();
    const dispatch = useDispatch();

    const signup = async (e) => {   
        e.preventDefault();
        const signUpAction = await dispatch(userSignUp({
            user_name: username.current.value,
            email: email.current.value, 
            password: password.current.value}));
        console.log(signUpAction);
    }


    return (
        <div className="container" id="container">
        <div className="form-container log-in-container">
            <form onSubmit={signup} action="#">
                <h1> Register </h1>
                <input type="text" placeholder="Username" ref={username}/>
                <input type="email" placeholder="Email" ref={email}/>
                <input type="password" placeholder="Password" ref={password}/>
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
