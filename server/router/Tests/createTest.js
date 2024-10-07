const express = require("express");
const router = express.Router();
const Test = require("../../models/Test");
const Exam = require("../../models/Exams");
router.post("/api/test", async (req, res) => {
  const { from, to, exam, allowedStudents, category, allottedTime } = req.body;
  try {
    const user = await Exam.findOne({ name: exam });
    const newTest = new Test({
      from,
      to,
      exam: user._id,
      allowedStudents,
      allottedTime,
    });
    let tests = await newTest.save();
    tests = await tests.populate("exam");
    res.status(201).json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
