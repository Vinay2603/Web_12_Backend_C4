const express = require("express")
const connect = require("./configs/db")

 const userController = require("./controllers/user")
 const theatreController = require("./controllers/theatre")
 const showController = require("./controllers/show")
 const seatController = require("./controllers/seat")
 const screenController = require("./controllers/screen")
const movieController = require("./controllers/movie")

const app = express()

app.use(express.json())

 app.use("/users", userController)
 app.use("/theatres", theatreController)
 app.use("/shows", showController)
 app.use("/seats", seatController)
 app.use("/screens", screenController)
app.use("/movies", movieController)

app.listen(2233, async()=>{
    await connect()
    console.log("listing on port 2233")
})