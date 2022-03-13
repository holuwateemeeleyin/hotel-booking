const express = require ('express')
const router = express.Router();

const { Booking }= require('../models/Booking')


router.post('/create-booking', (req, res)=> {
    const booking = new Booking(req.body)
    booking.save((err, doc)=> {
        if(err) return res.status(400).send(err)
        res.status(200).json ({
            post:true,
            bookingID:doc._id
        })
    })
})

// Get all booking Details -- not working
router.get('/bookings' , (req, res)=> {

    let skip = parseInt(req.query.skip)
    let limit = parseInt(req.query.limit)
    let order = req.query.order

    // ORder = asc || desc
    Booking.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=> {
        if(err) return res.status(400).send(err);
        res.send(doc)    })
})

// 
router.get('/RoomsInBooking', (req,res) => {
    let roomNo = req.query.roomNo
    Booking.findOne({roomNo}).populate('room')
    .then(booking => {
        res.json(booking)
    })
    
})
module.exports = router