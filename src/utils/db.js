const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/";

exports.connect = (url = dbUrl, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
