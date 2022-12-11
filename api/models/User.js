import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "Users",
  }
);
