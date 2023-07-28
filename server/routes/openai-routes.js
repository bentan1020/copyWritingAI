const express = require("express");
const router = express.Router();

const chatGPT= require("../controller/openai-controllers")

router.post("/", chatGPT.getChatGPT)
router.post("/new", chatGPT.saveFacebookAd)

module.exports = router;