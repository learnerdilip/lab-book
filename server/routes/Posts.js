const express = require("express");

const router = express.Router();

const Post = require("../models/PostModel");

router.get("/", (req, res) => {
  res.send("we are on posts");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const post = await Post.create({
    title: req.body.title,
    description: req.body.description
  });

  post
    .save()
    .then(data => res.send(data))
    .catch(err => res.json({ message: err }));
});

module.exports = router;
