const express = require("express");
const { signupUser, loginUser } = require("../../controller/userController");

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Register route

router.post("/signup", signupUser);

module.exports = router;
