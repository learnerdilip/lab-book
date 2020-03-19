const { Router } = require("express");
const auth = require("../auth/middleWare");
const Note = require("./model");

const router = new Router();

router.post("/notes", auth, async (req, res, next) => {
  try {
    const makeNote = await Note.create({
      text: req.body.text,
      text_cat: req.body.textType,
      user_id: req.user._id
    });
    res.send(makeNote);
  } catch {
    error => next(console.error(error));
  }
});

router.get("/notes", auth, async (req, res, next) => {
  try {
    const notesList = await Note.find({ user_id: req.user._id });
    res.send(notesList);
  } catch {
    error => next(console.error(error));
  }
});

module.exports = router;
