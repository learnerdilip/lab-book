const mongoose = require("mongoose");

const UserModel = mongoose.model(
  "users",
  mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: String
  })
);

module.exports = UserModel;
