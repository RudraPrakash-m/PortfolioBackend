const mongoose = require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB