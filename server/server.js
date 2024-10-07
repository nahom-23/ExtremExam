const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const userRoutes = require("./router/user");
const authRoutes = require("./router/auth/auth");

const creatCatagory = require("./router/catagory/create_catagory");
const getAllCatagory = require("./router/catagory/getallcatagory");
const creatquestions = require("./router/Questions/create-questions");
const getallexams = require("./router/Exam/getexamsbycategory");
const getexams = require("./router/Exam/getexam");
const getexambyid = require("./router/Exam/getexamwithid");
const createTest = require("./router/Tests/createTest");

const app = express();
require("dotenv").config();
require("./config/passport-setup");

// middleware
app.use(express.json());
app.use(
  session({
    secret: "F62zYcBTF8NtWwHxZgGTpeSWdy5BK35gndaCEcD5tbsTcutSxFLgGBnmy",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/user", userRoutes);
app.use("/", authRoutes);

app.use(creatCatagory);
app.use(getAllCatagory);
app.use(creatquestions);
app.use(getallexams);
app.use(getexams);
app.use(getexambyid);
app.use(createTest);

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
