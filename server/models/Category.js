const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Category", CategorySchema);
