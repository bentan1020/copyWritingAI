const { Configuration, OpenAIApi } = require("openai");

const HttpError = require("../models/http-error");
const facebookAds = require("../models/facebook-ads");

// configuration for openai
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// add facebook ads
exports.saveFacebookAd = async (req, res, next) => {
  const { productType, callToAction, ad } = req.body;

  const newFacebookAd = new facebookAds({
    productType,
    callToAction,
    ad,
  });

  try {
    await newFacebookAd.save();
  } catch (err) {
    const error = new HttpError(
      "Created new ad failed, please try again later",
      500
    );
    return next(error);
  }

  let responseObject = newFacebookAd.toObject({ getters: true });

  res.status(201).json({ ad: responseObject });
};

// string builder
let feedData = "";
const stringBuilder = (dict, str) => {
  feedData += str + " \n";
  Object.entries(dict).forEach(([key, value]) => {
    feedData += `Here are some ${key} information about our target audience: \n`;
    Object.entries(dict[key]).forEach(([secKey, secValue]) => {
      if (secValue != "") {
        feedData += `${secKey} ${key} information are ${secValue}, \n`;
      }
    });
    feedData += "\n";
  });
  console.log(feedData);
};

// return a chatgpt response
exports.getChatGPT = async (req, res, next) => {
  const input = req.body;
  stringBuilder(
    input,
    "here are some traits about our target audience, as well as our product: \n"
  );

  let samples;
  try {
    samples = await facebookAds.find();
  } catch (err) {
    const error = new HttpError("could not connect to DB", 404);
    return next(error);
  }

  let response;
  try {
    response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Today, you are going to be a world-class direct responsible copywriter who specializes in writing Facebook ads. I am going to show you some examples of good ads. Just read them. Don't explain them to me. After you acknowledge that you have read the ads. I will give you further instructions. Ready?`,
        },
        {
          role: "user",
          content: samples.map((sample) => sample.ad).join("\n"),
        },
        {
          role: "user",
          content: `Great. Remember, you're acting as a world-class direct response copywriter who specializes in Facebook ads. Now write me a 300 word Facebook ad that follow a similar structure based on the information I have provided you. Make them sensational and emotionally engaging. \n${feedData}.`,
        },
      ],
      // max_tokens: 1500,
    });
  } catch (err) {
    const error = new HttpError(
      "Could not connect to chatGPT API, try later",
      404
    );
    return next(error);
  }

  console.log(response.data.choices[0].message.content);
  res.send(response.data.choices[0].message.content);
};
