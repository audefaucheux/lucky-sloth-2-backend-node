require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.DB_HOST;
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.connect = () => mongoose.connect(url, options);
