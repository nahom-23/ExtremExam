const mongoose = require("mongoose");
const Category = require("./Category");
const Question = require("./Questions");
const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});
module.exports = mongoose.model("Exam", ExamSchema);
