import React, { useState } from "react";
import './Login.css';
import Axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
Axios.defaults.withCredentials = true;
const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/login', {
        email, 
        password,
    }).then(response => {
        if(response.data.status){
            localStorage.removeItem("username");
            alert("Login Successfull")
            navigate('/')
        }
        }).catch(err => {
            console.log(err)
            alert("check your email and password");
        })
    };
return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            placeholder="******" 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <Link to="/forgotPassword">Forgot Password?</Link>
            <p>Don't have Account? <Link to ="/register">Sign Up</Link></p>
        </form>
    </div>
  )
}

export default Login
