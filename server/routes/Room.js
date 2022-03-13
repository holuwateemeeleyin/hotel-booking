const express = require ('express')
const router = express.Router();

const { Room }= require('../models/Room')


router.post('/create', (req, res)=> {
    const room = new Room(req.body)
    room.save((err, doc)=> {
        if(err) return res.status(400).send(err)
        res.status(200).json ({
            post:true,
            roomID:doc._id
        })
    })
})


// Get A room 
router.get('/getroom', (req, res)=> {
    let id = req.query.id;

    Room.findById(id, (err, doc)=> {
        if(err) return res.status(400).send(err)
        res.send(doc);
    })
})


// Get all Rooms Details
router.get('/rooms' , (req, res)=> {

    let skip = parseInt(req.query.skip)
    let limit = parseInt(req.query.limit)
    let order = req.query.order

    // ORder = asc || desc
    Room.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=> {
        if(err) return res.status(400).send(err);
        res.send(doc)
        })
})

// Get all available rooms
router.get('/getAvailableRooms', (req, res)=> {
    // let isAvailable = req.query.isAvailable

    Room.findOne({isAvailable:true}, (err, doc)=> {
        if(err) return res.status(400).send(err); 
        res.send(doc)
    })
})

// Get All Unavailable rooms
router.get('/getUnavailableRooms', (req, res)=> {
    Room.findOne({isAvailable: false}, (err, doc)=> {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})


// Get Room by Room No
router.get('/getRoomDetailsByRoomNo', (req,res)=> {
    let roomNo = req.query.roomNo
    
    Room.findOne({roomNo:roomNo}, (err, doc)=> {
        if(err) return res.status(400).send(err)
        res.send(doc)
    })
})


module.exports = router