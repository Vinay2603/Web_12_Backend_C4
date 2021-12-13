const express = require("express")
const Show = require("../models/show")
const router = express.Router()

router.post("/" , async(req,res)=>{
    try{
       const show = await Show.create(req.body)
       return res.status(201).send({show})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})


module.exports = router 


