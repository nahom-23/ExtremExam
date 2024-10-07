const UserRole = require("../models/UserRole");

const isAdmin = (req, res, next) => {
  if (req.user.role === UserRole.Admin) {
    next();
  } else {
    res.status(403).json({ error: "Acces denied. Admin only." });
  }
};

module.exports = isAdmin;
