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
let aggregateData = {}

app.post("/general", (req, res) => {
  const input = req.body;

  feedData += "Here are some general facts about my ideal client: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  feedData += "\n";
  console.log(feedData);

  aggregateData =  {
    ...aggregateData,
    "general": input
  }
  console.log(aggregateData)
  
  res.sendStatus(200);
});

app.post("/pain", (req, res) => {
  const input = req.body;

  feedData += "my client is dealing with these pain: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  feedData += "\n"
  console.log(feedData);

  aggregateData =  {
    ...aggregateData,
    "pain": input
  }
  console.log(aggregateData)

  res.sendStatus(200);
});

app.post("/hopes", (req, res) => {
  const input = req.body;

  feedData += "my client have these dreams and aspirations: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  console.log(feedData);

  aggregateData =  {
    ...aggregateData,
    "hopes": input
  }
  console.log(aggregateData)

  res.sendStatus(200);
});

app.post("/competitors", async (req, res) => {
  const input = req.body;

  feedData += "our competitors, and what our ideal clients like about our competitors: \n";
  Object.entries(input).forEach(([key, value]) => {
    feedData += `${key}: ${value}, `;
  });
  console.log(feedData)

  aggregateData =  {
    ...aggregateData,
    "competitors": input
  }
  console.log(aggregateData)

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `what is my profession?: ${feedData}.`,
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
