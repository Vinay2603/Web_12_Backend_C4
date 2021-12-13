const express = require("express")
const  Seat = require("../models/seat")
const router = express.Router()

router.post("/" , async(req,res)=>{
    try{
       const  seat = await  Seat.create(req.body)
       return res.status(201).send({ seat})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})


module.exports = router 


