const mongoose = require("mongoose");

const NoteModel = mongoose.model(
  "notes",
  mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    creationDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    text_cat: {
      type: String,
      required: true
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })
);

module.exports = NoteModel;
