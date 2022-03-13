const mongoose = require ('mongoose')

const RoomSchema = new mongoose.Schema({ 
    roomNo: { 
        type: String, 
        required: true, 
        trim: true 
    },
    category: { 
        type: String, 
        required: true, 
        trim: true 
    },
    airConditioningCategory: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String, 
        required: true, 
        trim: true
    },
    isAvailable: {
        type: Boolean, 
        default:true
    },
    price: { 
        type: Number, 
        required: true 
    }, 
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
       }
},{timestamps:true});


const Room = mongoose.model('rooms', RoomSchema)
module.exports = {Room}