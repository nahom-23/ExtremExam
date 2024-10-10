const express = require("express");
const Category = require("../../models/Category");
const requireAuth = require("../../middleware/requirAuth");
const isAdmin = require("../../middleware/isAdmin");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { promise } = require("bcrypt/promises");
const upload = require("../../middleware/uploadMiddleware");
router.post(
  "/api/category",
  upload.single("photo"),
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3, max: 19 })
      .withMessage("Name must be between 3 and 20")
      .custom(async (name) => {
        const vales = await Category.findOne({ name });
        if (vales) {
          return Promise.reject("other category exists with this name");
        }
      }),
    body("description")
      .notEmpty()
      .withMessage("description is required")
      .isLength({ min: 2, max: 3 })
      .withMessage("Description must be between 2 and 3")
      .custom(async (description) => {
        const list = await Category.findOne({ description });
        if (list) {
          return Promise.reject("Other category exists ");
        }
      }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, detail } = req.body;
    const photo = req.file ? req.file.path : null;
    console.log(photo);

    const newCategory = new Category({ name, description, photo, detail });

    try {
      await newCategory.save();
      res.status(201).json(newCategory);
    } catch (error) {
      console.error("Error saving category:", error);
      res.status(400).json({ error: error.message });
    }
  }
);

module.exports = router;
