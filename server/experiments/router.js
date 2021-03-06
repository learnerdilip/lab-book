const { Router } = require("express");
const ExperimentsModel = require("./model");
const auth = require("../auth/middleWare");
const multer = require("multer");
const router = new Router();
// var upload = multer({ dest: "uploads/" });

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getMilliseconds() + "_" + file.originalname);
  }
});
var upload = multer({ storage: storage });

var cpUpload = upload.fields([
  { name: "protofiles", maxCount: 5 },
  { name: "rawfiles", maxCount: 5 },
  { name: "datafiles", maxCount: 5 }
]);

router.post("/experiment", auth, cpUpload, async (req, res, next) => {
  try {
    console.log("---the Frnt end REQUEST --------", req.files);
    const protofiles = req.files["protofiles"].map(
      file => "http://localhost:4000/" + file.path
    );
    const rawfiles = req.files["rawfiles"].map(
      file => "http://localhost:4000/" + file.path
    );
    const datafiles = req.files["datafiles"].map(
      file => "http://localhost:4000/" + file.path
    );
    const createExperiement = await ExperimentsModel.create({
      date: req.body.date,
      title: req.body.title,
      keywords: req.body.keywords,
      description: req.body.description,
      protocol: req.body.protocol,
      raw_data: req.body.raw_data,
      data_analysis: req.body.analysis,
      conclusion: req.body.conclusion,
      proto_files: [...protofiles],
      raw_files: [...rawfiles],
      data_files: [...datafiles],
      user_id: req.user._id
    });
    console.log("---the experient SENDING  data ----", createExperiement);
    res.send(createExperiement);
  } catch {
    error => console.error(error);
  }
});

router.put(
  "/experimentedit",
  upload.single("uploadedit"),
  async (req, res, next) => {
    try {
      const doc = await ExperimentsModel.findOne({ _id: req.query.id });
      doc.title = req.body.title;
      doc.keywords = req.body.keywords;
      doc.description = req.body.description;
      doc.protocol = req.body.protocol;
      doc.raw_data = req.body.raw_data;
      doc.data_analysis = req.body.analysis;
      doc.conclusion = req.body.conclusion;
      doc.image = "http://localhost:4000/" + req.file.path;
      doc.save();
      res.send(doc);
    } catch {
      error => console.error(error);
    }
  }
);

router.get("/experiments", async (req, res, next) => {
  try {
    //  user_id: req.user.id
    ExperimentsModel.find()
      .sort({ date: 1 })
      .limit(10)
      .exec((err, posts) => {
        // console.log("-------------------", posts);
        res.send(posts);
      });
  } catch {
    error => console.error(error);
  }
});

module.exports = router;
