const express = require("express");
const connectDB = require("./config/db/db");
const cors = require("cors");
const { default: axios } = require("axios");
const likeModel = require("./models/LikeModel");
const publicRouter = require("./routes/publicRouter");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rudraprakashmallick.netlify.app",
    ],
  })
);

connectDB();

app.use("/api", publicRouter);

app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
