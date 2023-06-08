const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let feedData = ""

app.post("/general", async (req, res) => {
  const input = req.body;

  feedData += "Here are some general facts about my ideal client: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  feedData += "\n"
});

app.post("/pain", async (req, res) => {
  const input = req.body;

  feedData += "my client is dealing with these pain: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  feedData += "\n"
});

app.post("/hopes", async (req, res) => {
  const input = req.body;

  feedData += "my client have these dreams and aspirations: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  feedData += "\n"
});

app.post("/competitors", async (req, res) => {
  const input = req.body;

  feedData += "our competitors, and what our ideal clients like about our competitors: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `repeat my data back to me: ${feedData}.`,
    max_tokens: 150,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
  res.send(response.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
