const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const openaiRoutes = require("./routes/openai-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", openaiRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

mongoose
  .connect(
    `mongodb+srv://ben:${process.env.MONGODB_PW}@cluster0.loxrjek.mongodb.net/copywriting?retryWrites=true&w=majority`
  )
  .then(
    app.listen(8080, () => {
      console.log("listening on port 8080");
    })
  )
  .catch((err) => {
    console.log(err);
  });
