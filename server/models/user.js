const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  facebookMessages: [
    {
      sender: { type: String, enum: ["user", "bot"] },
      message: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
