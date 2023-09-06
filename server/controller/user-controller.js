const User = require("../models/user");
const HttpError = require("../models/http-error");

exports.createUser = async (userData) => {
  const uid = userData.data.id;
  const name = userData.data.first_name + " " + userData.data.last_name;
  const email = userData.data.email_addresses[0].email_address;

  try {
    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const newUser = new User({ 
      uid: uid, name, email });
    await newUser.save();

    return newUser;
  } catch (err) {
    throw err;
  }
};

exports.loginUser = async (req, res, next) => {
};
