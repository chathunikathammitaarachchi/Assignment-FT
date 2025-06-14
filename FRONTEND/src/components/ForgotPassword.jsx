import React, { useState } from "react";
import Axios from 'axios'
import {  useNavigate } from "react-router-dom";
import "./ForgetPassword.css"

function ForgotPassword() {
const [email, setEmail] = useState("");
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/forgot-password', {
        email, 
        }).then(response => {
            if(response.data.status){
                alert("check your email for reset password link")
                navigate('/login')
            }
           
        }).catch(err => {
            console.log(err)
        })
    }
return (
<div className="forgot-container">
    <form className="forgot-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label htmlFor="email">Email:</label>
        <input type="email"
                autoComplete="off"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
    </form>
</div>
  )
}

export default ForgotPassword
