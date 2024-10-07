const mongoose = require("mongoose");
const Category = require("./Category");
const Exams = require("./Exams");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  choice: [String],
});

module.exports = mongoose.model("Question", QuestionSchema);
