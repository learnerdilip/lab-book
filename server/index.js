const express = require("express");
// const db = require("./db");
// const userRouter = require("./user/router");
// const noteRouter = require("./notes/router");
// const documentRouter = require("./product/router");
require("dotenv").config();
const mongoose = require("mongoose");

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => console.log("the MONGODB is connected"));

const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors");
app.use(cors());
app.use(express.json());
// app.use(userRouter);
// app.use(noteRouter);

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("mongoose activated")
);

app.listen(port, () => console.log(`Server started on port ${port}`));
