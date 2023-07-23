const express = require("express");
const router = express.Router();

const chatGPT= require("../controller/openai-controllers")

router.post("/", chatGPT.getChatGPT)

module.exports = router;