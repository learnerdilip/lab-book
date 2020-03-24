const mongoose = require("mongoose");

const ExperimentsModel = mongoose.model(
  "experiments",
  mongoose.Schema({
    date: {
      type: Date
    },
    title: {
      type: String,
      required: true
    },
    keywords: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    protocol: {
      type: String,
      required: true
    },
    raw_data: {
      type: String,
      required: true
    },
    data_analysis: {
      type: String,
      required: true
    },
    conclusion: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })
);

module.exports = ExperimentsModel;
