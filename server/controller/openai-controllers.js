const { Configuration, OpenAIApi } = require("openai");

const HttpError = require("../models/http-error");
const facebookAds = require("../models/facebook-ads");
const User = require("../models/user");

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

// return a response from openai
exports.getChatGPT = async (req, res, next) => {
  // Extract the string from the object
  const inputString = Object.keys(req.body)[0];

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
          content: `Great. Remember, you're acting as a world-class direct response copywriter who specializes in Facebook ads. Now write me a 300 word Facebook ad that follow a similar structure based on the information I have provided you. Make them sensational and emotionally engaging. \n${inputString}.`,
        },
      ],
      // max_tokens: 1500,
    });
  } catch (err) {
    console.error("OpenAI API Error:", err);
    const error = new HttpError(
      "Could not connect to chatGPT API, try later",
      404
    );
    return next(error);
  }

  console.log(response.data.choices[0].message.content);
  res.send(response.data.choices[0].message.content);
};

// retrieve messages
exports.retrieveMessage = async (req, res, next) => {
  const uid = req.params.uid;
  let user;
  try {
    user = await User.findOne({ uid: uid });
    res.json(user.facebookMessages);
  } catch (err) {
    const error = new HttpError(
      "could not find anything related to this user",
      500
    );
    return next(error);
  }
};

// give prompt
exports.givePrompt = async (req, res, next) => {
  const uid = req.params.uid;
  const { message, currTime } = req.body;

  let findUser;
  try {
    findUser = await User.findOne({ uid: uid });
  } catch (err) {
    const error = new HttpError(
      "could not find anything related to this user",
      500
    );
    return next(error);
  }

  findUser.facebookMessages.push({
    sender: "user",
    message: message,
    createdAt: currTime,
  });

  try {
    await findUser.save();
  } catch (err) {
    console.log("Error while saving:", err);
  }

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
          content: `Great. Remember, you're acting as a world-class direct response copywriter who specializes in Facebook ads. Now write me a 300 word Facebook ad that follow a similar structure based on the information I have provided you. Make them sensational and emotionally engaging. \n${message}.`,
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
  responseFromGPT = response.data.choices[0].message.content;
  const TimeNow = new Date();

  findUser.facebookMessages.push({
    sender: "bot",
    message: responseFromGPT,
    createdAt: TimeNow,
  });
  findUser.save();

  res.json({ responseFromGPT });
};
