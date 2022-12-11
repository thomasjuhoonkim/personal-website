import mongoose from "mongoose";
import { userSchema } from "../models/User.js";

const User = mongoose.model("User", userSchema);

export const addUser = async (username, password, callback) => {
  const newUser = new User({
    username: username,
    password: password,
  });
  newUser.save((err, result) => {
    if (err) console.error(err);
    callback(result);
  });
};

export const getUserByUsername = async (username) => {
  const doc = await User.findOne({ username: username });
  return doc;
};
