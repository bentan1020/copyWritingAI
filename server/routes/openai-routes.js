const express = require("express");
const router = express.Router();

const { getChatGPT, saveFacebookAd, retrieveMessage, givePrompt }  = require("../controller/openai-controllers")

router.post("/openaiResponse", getChatGPT)
router.post("/new-facebook-ad", saveFacebookAd)
router.get("/retrieveMessages/:uid", retrieveMessage)
router.post("/givePrompt/:uid", givePrompt)

module.exports = router;