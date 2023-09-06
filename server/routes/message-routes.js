const express = require("express");
const router = express.Router();

const { saveFacebookAd, retrieveMessage, givePrompt }  = require("../controller/message-controller")

router.post("/new-facebook-ad", saveFacebookAd)
router.get("/retrieveMessages/:uid", retrieveMessage)
router.post("/givePrompt/:uid", givePrompt)

module.exports = router;