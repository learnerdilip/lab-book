const express = require("express");
const userRouter = require("./user/router");
const mongoose = require("mongoose");
require("dotenv").config();
const noteRouter = require("./notes/router");

const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(noteRouter);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("mongoose activated")
);

app.listen(port, () => console.log(`Server started on port ${port}`));
