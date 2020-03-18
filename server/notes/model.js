const mongoose = require("mongoose");

const NoteModel = mongoose.model(
  "notes",
  mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    text_cat: {
      type: String,
      required: false
    }
  })
);

module.exports = NoteModel;
