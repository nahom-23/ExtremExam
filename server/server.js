const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./router/user");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
