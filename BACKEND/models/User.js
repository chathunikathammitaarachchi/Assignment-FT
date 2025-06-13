import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },  
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});


const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}