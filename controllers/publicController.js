const likeModel = require("../models/LikeModel");

const allusers = async (req, res) => {
  try {
    const users = await likeModel.find();
    if (!users || users.length === 0) {
      return res.status(200).json({ message: "No likes found", data: [] });
    }
    res.status(200).json({ totalLikes: users.length, data: users });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const postLike = async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const exist = await likeModel.findOne({ email: email.trim() });

    if (exist) {
      return res
        .status(200)
        .json({ message: "You already liked my portfolio", liked: true });
    }

    const newLike = await likeModel.create({ email: email.trim() });
    res.status(201).json({
      message: "Thanks for liking my portfolio ❤️",
      liked: true,
      data: newLike,
    });
  } catch (error) {
    console.error("Error posting like:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { allusers, postLike };
