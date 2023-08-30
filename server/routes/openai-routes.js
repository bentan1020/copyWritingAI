const express = require("express");
const router = express.Router();

const chatGPT= require("../controller/openai-controllers")

router.post("/openaiResponse", chatGPT.getChatGPT)
router.post("/new-facebook-ad", chatGPT.saveFacebookAd)

module.exports = router;