import React, { useState } from "react";
import './Register.css';
import Axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/register', {
            name:username, 
            email, 
            password,
        }).then(response => {
            if(response.data.status){
                localStorage.setItem("username", username);
                alert("Registered successfully!");
                navigate('/login' , { state: { username } })
            }
        }).catch(err => {
            console.log(err)
        })
    };
    

return (
    <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="adminname">Name:</label>
            <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                autoComplete="off"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                placeholder="Enter Password" 
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="resubmit">Sign up</button>
            <p>Have an Account? <Link to ="/login">Login</Link></p>
        </form>
    </div>
    );
}

export default Register;
