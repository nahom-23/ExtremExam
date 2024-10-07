const express = require("express");
const router = express.Router();
const Exams = require("../../models/Exams");

router.get("/api/exams/:id", async (req, res) => {
  try {
    const exam = await Exams.findById(req.params.id).populate("questions");
    console.log(exam);
    res.status(200).json(exam);
  } catch (error) {
    res.status(error).json({ error: error.message });
  }
});

module.exports = router;
