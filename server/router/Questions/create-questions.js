const express = require("express");
const router = express.Router();
const Questions = require("../../models/Questions");
const Category = require("../../models/Category");
const Exams = require("../../models/Exams");
const requirAuth = require("../../middleware/requirAuth");

router.post("/api/questions", async (req, res) => {
  const { choice, answer, question, category, examName } = req.body;

  try {
    const user = await Category.findOne({ name: category });
    let exam = await Exams.findOne({ name: examName });
    console.log(exam);
    if (!exam) {
      exam = await Exams.create({
        examName,
        questions: [],
      });
    }

    const newQuestions = new Questions({
      choice,
      answer,
      question,
      category: user._id,
    });

    exam.questions.push(newQuestions._id);
    console.log(exam);
    await exam.save();
    let post = await newQuestions.save();
    post = await post.populate("category");
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
