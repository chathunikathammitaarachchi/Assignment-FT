import { useState,  } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Product from "./components/Product"
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import './App.css'

function App() {
   

  return (
   <div>
      <BrowserRouter>
  
        <Routes>
          
          <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
         <Route path="/product" element={<Product />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
