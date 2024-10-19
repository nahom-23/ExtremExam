const express = require("express");
const router = express.Router();
const User = require("../../models/userModal");

router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
