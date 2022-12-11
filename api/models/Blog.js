import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const blogSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    default: Date.now(),
  },
});
