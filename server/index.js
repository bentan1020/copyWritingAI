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

let feedData = ""
const stringBuilder = (dict, str) => {
  feedData += (str + " \n");
  Object.entries(dict).forEach(([key, value]) => {
    feedData += `Here are some ${key} information about our target audience: \n`
    Object.entries(dict[key]).forEach(([secKey, secValue]) => {
      if (secValue != "") {
        feedData += `${secKey} ${key} information are ${secValue}, `;
      }
    });
    feedData += "\n";
  });
  console.log(feedData);
}

// endpoints
app.post("/product", async (req, res) => {
  const input = req.body;
  stringBuilder(input, "here are some traits about our target audience, as well as our product")

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `write me a sales letter that sells my product based on the information of my ideal clients: ${feedData}.`,
    max_tokens: 1500,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
  res.send(response.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {console.log(`Server is listening on port ${port}`)})