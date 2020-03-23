const mongoose = require("mongoose");

const ExperimentsModel = mongoose.model(
  "experiments",
  mongoose.Schema({
    title: {
      type: String,
      required: true
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
