const { Router } = require("express");
const ExperimentsModel = require("./model");
const multer = require("multer");
// const auth = require("../auth/middleWare");

const router = new Router();

// const upload = multer({ dest: "uploads/" });
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
      const createExperiement = await ExperimentsModel.create({
        title: req.body.title,
        description: req.body.description,
        protocol: req.body.protocol,
        raw_data: req.body.raw_data,
        data_analysis: req.body.analysis,
        conclusion: req.body.conclusion,
        image: req.file.path
      });
      console.log("---the experient data ----", createExperiement);
      res.send(createExperiement);
    } catch {
      error => console.error(error);
    }
  }
);

module.exports = router;
