const mongoose = require ('mongoose')


const BookingSchema = new mongoose.Schema({
    bookingNo: { 
        type: String, 
        required: true, 
        trim: true 
    },
    guestId: { 
        type: String, 
        required: true, 
        trim: true 
    },
    roomNo: { 
        type: String, 
        trim: true 
    },
    bookingDate: { 
        type: Date
    },
    noOfAdults: {
        type:Number,
        required:true
    },
    noOfChildren: {
        type:Number,
        required: true
    },
    noOfInfants:{
        type:Number,
        required:true
    },
    arrivalDate: { 
        type: Date ,  
        required: true
    },
    remarks: { 
        type: String, 
        required: true, 
        trim: true },
    room: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        required: false, 
        ref: 'rooms' 
    }],
});

const Booking = mongoose.model('bookings', BookingSchema)
module.exports = {Booking}