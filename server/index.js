const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

// configuration for openai
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// endpoints
let feedData = ""

const stringBuilder = (dict, str) => {
  feedData += (str + " \n");
  Object.entries(dict).forEach(([key, value]) => {
    if (value !== "") {
      feedData += `${key}: ${value}, `;
    }
  });
  feedData += "\n";
  console.log(feedData);
}

//general post request
app.post("/general", (req, res) => {
  const input = req.body;
  stringBuilder(input, "Here are some general facts about my ideal client:");
  res.sendStatus(200);
});

//pain post request
app.post("/pain", (req, res) => {
  const input = req.body;
  stringBuilder(input, "my client is dealing with these pain:")
  res.sendStatus(200);
});

//hopes post request
app.post("/hopes", (req, res) => {
  const input = req.body;
  stringBuilder(input, "my client have these dreams and aspirations:")
  res.sendStatus(200);
});

//competitors post request
app.post("/competitors", async (req, res) => {
  const input = req.body;
  stringBuilder(input, "our competitors, and what our ideal clients like about our competitors:")
  res.sendStatus(200);
});

//product post request
app.post("/product", async (req, res) => {
  const input = req.body;
  stringBuilder(input, "here are some traits about our product:")

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `write me a sales letter with the information i have provided you: ${feedData}.`,
    max_tokens: 150,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
  res.send(response.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {console.log(`Server is listening on port ${port}`)})
