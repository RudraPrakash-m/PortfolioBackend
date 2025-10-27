const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    email:String
})

module.exports = likeSchema