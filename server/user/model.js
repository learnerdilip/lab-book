const mongoose = require("mongoose");

const UserModel = mongoose.model(
  "users",
  mongoose.Schema({
    email: String,
    password: String,
    name: String
  })
);

module.exports = UserModel;
