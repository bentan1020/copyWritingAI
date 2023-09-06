const express = require("express");
const mongoose = require("mongoose");
const { ClerkExpressWithAuth, ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const cors = require("cors");

const openaiRoutes = require("./routes/message-routes");
const HttpError = require("./models/http-error");

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/message", ClerkExpressRequireAuth(), openaiRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.loxrjek.mongodb.net/copywriting?retryWrites=true&w=majority`
  )
  .then(
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });