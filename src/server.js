const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { connect } = require("./utils/db.js");
const userRouter = require("./resources/user/user.router");

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/users", userRouter);

module.exports = start = async () => {
  try {
    await connect();
    app.listen(3004, () => {
      console.log("Server is running on 3004");
    });
  } catch (error) {
    console.log(error);
  }
};
