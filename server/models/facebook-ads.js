const mongoose = require("mongoose");

const facebookAdSchema = new mongoose.Schema({
    productType: { type: String, require: true },
    callToAction: { type: String, require: true },
    ad: { type: String, require: true },
});

module.exports = mongoose.model("Product-facebook-ad", facebookAdSchema);