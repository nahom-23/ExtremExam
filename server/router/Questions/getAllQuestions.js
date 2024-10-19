const express = require("express");
const router = express.Router();
const Questions = require("../../models/Questions");

router.get("/api/questions", async (req, res) => {
  try {
    const allQuestions = await Questions.find({});
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
