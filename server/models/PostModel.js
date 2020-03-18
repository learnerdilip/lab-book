const mongoose = require("mongoose");

const postModel = mongoose.model(
  "postings",
  mongoose.Schema({
    title: String,
    description: String
  })
);

module.exports = postModel;
