const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    role:{
         type:String
    },
    department:{
        type:String
    },
    accessLevel:{
        type:Number,
        default:4
    }
})

const User = mongoose.model("user",UserSchema);
module.exports =  User