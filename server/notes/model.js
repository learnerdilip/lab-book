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
      require: true,
      default: Date.now
    },
    text_cat: {
      type: String,
      required: false
    }
  })
);

module.exports = NoteModel;
