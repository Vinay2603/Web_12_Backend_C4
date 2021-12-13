const jwt = require("jsonwebtoken")
require('dotenv').config()
const newToken = (user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY )
}

const signup= async(req,res)=>{
    let token = "abcd"
    return res.status(201).json({data: token})

}


const signin = async(req,res)=>{
    return res.send("User")
}

module.exports = {
    signup,
    signin
}