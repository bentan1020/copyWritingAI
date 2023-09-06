const express = require("express");
const router = express.Router();

const { getChatGPT, saveFacebookAd, retrieveMessage }  = require("../controller/openai-controllers")

router.post("/openaiResponse", getChatGPT)
router.post("/new-facebook-ad", saveFacebookAd)
router.get("/retrieveMessages/:uid", retrieveMessage)

module.exports = router;