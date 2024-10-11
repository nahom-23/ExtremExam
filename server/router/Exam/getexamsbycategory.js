const express = require("express");
const Exams = require("../../models/Exams");
const router = express.Router();

// Route to get exams by category ID
router.get("/api/exams/category/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Find exams where any question has the matching category
    const exams = await Exams.find().populate({
      path: "questions",
      match: { category: categoryId }, // Filter questions by categoryId
      populate: {
        path: "category", // Populate category details
        model: "Category",
      },
    });

    // Filter out exams where no questions match the category
    const filteredExams = exams.filter((exam) => exam.questions.length > 0);

    if (filteredExams.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(filteredExams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
