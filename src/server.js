const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { connect } = require("./utils/db.js");
const userRouter = require("./resources/user/user.router");
require("dotenv").config();

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/users", userRouter);

const port = process.env.PORT;

module.exports = start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
