const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => { 
  const { prompt } = req.body;
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
    temperature: 0,
  });

  res.send(response.data.choices[0].text);
})

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
