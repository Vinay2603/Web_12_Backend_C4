const express = require("express")
const Screen = require("../modules/screen")
const router = express.Router()

router.post("/" , async(req,res)=>{
    try{
       const screen = await Screen.create(req.body)
       return res.status(201).send({screen})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})


module.exports = router 


