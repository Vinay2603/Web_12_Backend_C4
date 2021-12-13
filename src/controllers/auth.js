const jwt = require("jsonwebtoken")
const user = require("../modules/user")
require('dotenv').config()

const User = require("../modules/user")

const newToken = (user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY )
}

const signup= async(req,res)=>{

    try{
       const user = await User.create(req.body)
       const token = newToken(user) 
       return res.status(201).json({data: {token}})
    }catch(e){
        return res.status(500).json({status: "failed" , message:"something went wrong "})
    }
   

}


const signin = async(req,res)=>{

    try{
        const user = await User.findOne({
            email: req.body.email
        }).exec()

        if(!user) return res.status(401).json({status:"failed" , message : "your email or password is not correct"})

        


    }catch(e){
        return res.status(500).json({status: "failed" , message:"something went wrong "})
    }

    try{
        const match = await user.checkPassword(req.body.password)

        if(! match) return res.status(401).json({ status: "failed ", message: "your email or password is not correct"})
    }catch(e){
        return res.status(500).json({status: "failed" , message:"something went wrong "})
    }
}

module.exports = {
    signup,
    signin
}