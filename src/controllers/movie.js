const express = require("express")
const Movie = require("../modules/movie")
const router = express.Router()

router.post("/" , async(req,res)=>{
    try{
       const movie = await Movie.create({
        name: req.body.name,
        actors: req.body.actors,
        languages: req.body.password ,
        directors:req.body.roles ,
        poster_url :req.file.path,
       
       })
       return res.status(201).send({movie})
    }catch(e){
        return res.status(500).json({message : e.message , status: "failed"})
    }
})


module.exports = router 


