import React, { useState } from "react";
import "./ResetPassword.css"
import Axios from 'axios'
import {  useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
const [password, setPassword] = useState("");
const {token} = useParams()
const navigate = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/reset-password/"+token, {
        password, 
    }).then(response => {
        if(response.data.status){
            alert("Password reset successfully!");
            navigate('/login')
        }
            console.log(response.data)
        }).catch(err => {
            console.log(err)
             alert("Something went wrong.");
        })
}
return (
    <div className="reset-container">
        <form className="reset-form" onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <label htmlFor="password">New Password:</label>
            <input 
            type="password"
            id="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword
