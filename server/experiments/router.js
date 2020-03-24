const { Router } = require("express");
const ExperimentsModel = require("./model");
const multer = require("multer");
// const auth = require("../auth/middleWare");

const router = new Router();

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      new Date().toISOString().substring(0, 10) + "_" + file.originalname
    );
  }
});
var upload = multer({ storage: storage });

router.post(
  "/experiment",
  upload.single("fileuploaded"),
  async (req, res, next) => {
    try {
      // console.log("---the Frnt end REQUEST --------", req.body);
      const createExperiement = await ExperimentsModel.create({
        date: req.body.date,
        title: req.body.title,
        keywords: req.body.keywords,
        description: req.body.description,
        protocol: req.body.protocol,
        raw_data: req.body.raw_data,
        data_analysis: req.body.analysis,
        conclusion: req.body.conclusion,
        image: "http://localhost:4000/" + req.file.path
      });
      // console.log("---the experient SENDING  data ----", createExperiement);
      res.send(createExperiement);
    } catch {
      error => console.error(error);
    }
  }
);

router.get("/experiments", (req, res, next) => {
  try {
    // console.log("the experiments req bod", req.body);

    //  user_id: req.user.id
    ExperimentsModel.find()
      .sort({ date: -1 })
      .limit(10)
      .exec((err, posts) => {
        console.log("-------------------", posts);
        res.send(posts);
      });
    // console.log("the experiment list#########", experimentList);
  } catch {
    error => console.error(error);
  }
});

module.exports = router;
