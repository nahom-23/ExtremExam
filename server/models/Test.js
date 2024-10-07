const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  from: Date,
  to: Date,
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  allowedStudents: [String],
  allottedTime: {
    type: Number,
    required: true,
  },
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
