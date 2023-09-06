const express = require("express");
const mongoose = require("mongoose");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
const { Webhook } = require("svix");

const cors = require("cors");

const messageRoutes = require("./routes/message-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");
const { createUser } = require("./controller/user-controller");

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const payload = req.body.toString("utf8");
      const headers = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const verifiedPayload = wh.verify(payload, {
        "svix-signature": headers["svix-signature"],
        "svix-timestamp": headers["svix-timestamp"],
        "svix-id": headers["svix-id"],
      });
      
      const newUser = await createUser(verifiedPayload);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  }
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/message", ClerkExpressRequireAuth(), messageRoutes);
app.use("/api/user", userRoutes);

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
