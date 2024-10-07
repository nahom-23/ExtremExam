const express = require("express");
const Exams = require("../../models/Exams");
const router = express.Router();

// Route to get exams by category ID
router.get("/api/exams", async (req, res) => {
  try {
    const exams = await Exams.find({}).populate({
      path: "questions",
      populate: {
        path: "category",
        model: "Category",
      },
    });

    if (!exams.length) {
      return res
        .status(404)
        .json({ message: "No exams found for this category" });
    }

    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
