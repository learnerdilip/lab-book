const mongoose = require("mongoose");

const ExperimentsModel = mongoose.model(
  "experiments",
  mongoose.Schema({
    date: {
      type: Date,
      unique: true,
      required: true
    },
    title: {
      type: String
    },
    keywords: {
      type: String
    },
    description: {
      type: String
    },
    protocol: {
      type: String
    },
    raw_data: {
      type: String
    },
    data_analysis: {
      type: String
    },
    conclusion: {
      type: String
    },
    proto_files: {
      type: [String]
    },
    raw_files: {
      type: [String]
    },
    data_files: {
      type: [String]
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })
);

module.exports = ExperimentsModel;
