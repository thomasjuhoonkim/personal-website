import mongoose from "mongoose";
import { userSchema } from "../models/User.js";

const User = mongoose.model("User", userSchema);

export const addUser = async (username, password, callback) => {
  const newUser = new User({
    username: username,
    password: password,
  });
  newUser.save((err, result) => callback(err, result));
};

// doc = document, equivalent to row in SQL

export const userExists = async (filter) => {
  const doc = await User.exists(filter);
  return doc;
};

export const getUserById = async (id) => {
  const doc = await User.findById(id);
  return doc;
};

export const getUserByUsername = async (username) => {
  const doc = await User.findOne({ username: username });
  return doc;
};
