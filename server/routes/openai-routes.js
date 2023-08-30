const express = require("express");
const router = express.Router();

const { getChatGPT, saveFacebookAd }  = require("../controller/openai-controllers")

router.post("/openaiResponse", getChatGPT)
router.post("/new-facebook-ad", saveFacebookAd)

module.exports = router;