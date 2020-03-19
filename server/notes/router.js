const { Router } = require("express");
const Note = require("./model");

const router = new Router();

router.post("/notes", async (req, res, next) => {
  try {
    const makeNote = await Note.create({
      text: req.body.text,
      text_cat: req.body.textType
    });
    res.send(makeNote);
  } catch {
    error => next(console.error(error));
  }
});

router.get("/notes", async (req, res, next) => {
  try {
    const notesList = await Note.find();
    res.send(notesList);
  } catch {
    error => next(console.error(error));
  }
});

module.exports = router;
