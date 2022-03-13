const mongoose = require('mongoose')
const guestSchema = mongoose.Schema ({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:1,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true,
        minlength:8
    },
    token: {
        type:String
    }
})


const Guest = mongoose.model('Guest', guestSchema)
module.exports ={ Guest}