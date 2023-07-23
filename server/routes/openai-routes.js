const express = require("express");
const chatGPT= require("../controller/openai-controllers")

const router = express.Router();

router.post("/", chatGPT.getChatGPT)

module.exports = router;