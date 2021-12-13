const express = require("express")
const User = require("../modules/user")
const upload = require("../middleware/upload")
const protect = require("../middleware/protect")
const router = express.Router();

router.post("/" ,upload.single("profile_photo_url"), async(req,res)=>{
   
    try{
       const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password ,
        profile_photo_url:req.file.path,
        roles:req.body.roles 
       })
       return res.status(201).send({user})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})

router.get("/",protect, async(req,res)=>{
    const user = await User.find({}).select("-password").lean().exec()
    return res.status(201).send(user)
})




module.exports = router ;


