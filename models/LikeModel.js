const mongoose = require("mongoose")
const likeSchema = require("../schemas/LikeSchema")

const likeModel = mongoose.model("like",likeSchema)

module.exports = likeModel