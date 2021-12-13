const jwt = require("jsonwebtoken")

const User = require("../modules/user")

const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET_KEY,(err,payload)=>{
            if(err) return reject(err)
            return resolve(payload)
        })
    })
}


const protect = async(req,res,next)=>{
    const bearer = req.headers.authorization 

    if(!bearer || !bearer.StartWith("Bearer ")){
        return res.status(401).json({
            status: "failed" , message :"your email or password is not correct"
        })

        const token = bearer.split("Bearer ")[1].trim()
        
    }

    let payload;
    try{
 
        payload = await verifyToken(token)
       

    }catch(e){
       return res.status(401).json({ status: "failed ", message: "your email or password is not correct"})
   }
  
   let user 
   try{
        user = User.findById(payload.user).lean().exec()
   }catch(e){
       return res.status(500).json({status: "failed" , message:"something went wrong "})
   }

  if(!user){
   return res.status(401).json({ status: "failed ", message: "your email or password is not correct"})
  }

   req.user = user
   next()
}

module.exports = protect
