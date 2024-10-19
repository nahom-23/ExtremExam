const express = require("express");
const router = express.Router();
const Test = require("../../models/Test");

router.get("/api/test", async (req, res) => {
  try {
    const Tests = await Test.find({}).populate("exam");

    res.status(200).json(Tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
