import express from 'express'
import dotnev from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotnev.config()


const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())


mongoose.connect('mongodb://localhost:27017/auditorium_management')

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})