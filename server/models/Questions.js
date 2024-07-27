const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
  catagroy: {},
  question: {
    type: string,
    required: true,
  },
  answer: {
    type: string,
    required: true,
  },
  choice: [string],
  allottedTime: {
    type: Number,
    required: true,
    default: 60,
  },
});

module.exports = mongoose.model("question", QuestionSchema);
