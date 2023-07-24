const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const openaiRoutes = require("./routes/openai-routes");
const HttpError = require("./models/http-error");

app.use("/product", openaiRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

mongoose
  .connect(
    "mongodb+srv://ben:bwSmFAccVpUPLNnz@cluster0.loxrjek.mongodb.net/copywriting?retryWrites=true&w=majority"
  )
  .then(
    app.listen(4999, () => {
      console.log("listening on port 4999");
    })
  )
  .catch((err) => {
    console.log(err);
  });
