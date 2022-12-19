import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
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

const User = mongoose.model("User", userSchema);

export default User;
