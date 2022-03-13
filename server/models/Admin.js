const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const SALT_I = 10;

const adminSchema = mongoose.Schema ({
    
    email:{
        type:String,
        required:true,
        unique:1,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    token: {
        type:String
    }
})


const Admin = mongoose.model('Admin', adminSchema)

module.exports = { Admin }