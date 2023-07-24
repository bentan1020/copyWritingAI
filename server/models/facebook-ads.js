const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facebookAdSchema = new Schema({
    headline: { type: String, required: true },
    callToAction: { type: String, require: true },
    body: { type: String, require: true },
});

module.exports = mongoose.model("facebook-ad", facebookAdSchema);