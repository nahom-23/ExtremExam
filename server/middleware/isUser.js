const UserRole = require("../models/UserRole");

const isUser = (req, res, next) => {
  if (req.user.role === UserRole.Students) {
    next();
  } else {
    res.status(403).json({ error: "Acces denied. Admin only." });
  }
};

module.exports = isUser;
