const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (name, email, password) {
  // Validation
  if (!name || !email || !password) {
    throw new Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  if (password.length > 20) {
    throw new Error("Password must be at most 20 characters");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: true,
    })
  ) {
    throw new Error("Password must be strong");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ name, email, password: hash });
  return user;
};

// Static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Password mismatch");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
