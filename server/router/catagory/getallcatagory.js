const express = require("express");
const { isAdmin } = require("../../middleware/isAdmin");
const Category = require("../../models/Category");
const router = express.Router();
const requireAuth = require("../../middleware/requirAuth");
router.get("/api/category", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
