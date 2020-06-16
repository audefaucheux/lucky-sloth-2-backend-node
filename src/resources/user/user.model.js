const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    credit: {
      type: Number,
      required: true,
      default: 100,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user", userSchema);
