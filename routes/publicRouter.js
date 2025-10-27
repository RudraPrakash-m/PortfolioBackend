const express = require("express")
const {allusers, postLike} = require("../controllers/publicController")

const publicRouter = express.Router()

publicRouter.get("/",(req, res)=>{
    res.json({message:"This is home page"})
})

publicRouter.get("/allusers",allusers)

publicRouter.post("/givelike",postLike)

module.exports = publicRouter