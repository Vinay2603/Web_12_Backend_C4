const express = require("express")
const User = require("../modules/user")
const router = express.Router()

router.post("/" , async(req,res)=>{
    try{
       const user = await User.create(req.body)
       return res.status(201).send({user})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})
