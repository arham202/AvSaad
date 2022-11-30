const mongoose = require("mongoose");

const UserSchema =  new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
    },
    con_password :{
        type:String,
        required:true,
    }
})

const Register = new mongoose.model("Signup",UserSchema);
 module.exports = Register;


