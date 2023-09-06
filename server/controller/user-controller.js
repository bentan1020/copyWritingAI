const User = require("../models/user");
const HttpError = require("../models/http-error");

exports.createUser = async (req, res, next) => {};

exports.loginUser = async (req, res, next) => {
  const uid = req.params.uid;
  let findUsers;
  try {
    User.findOne({ uid });
  } catch (err) {
    const error = new HttpError(
      "Created new ad failed, please try again later",
      500
    );
    return next(error);
  }
};
