const express = require("express");
const json = require("body-parser");
const urlencoded = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");
const userRouter = require("./resources/user/user.router");

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRouter);
// mongoose.connect("mongodb://localhost/lucky-sloth-2-backend-node", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// if (!db) console.log("Error connecting db");
// else console.log("Db connected successfully");

module.exports = start = () => {
  app.listen(3004, () => {
    console.log("Server is running on 3004");
  });
};
