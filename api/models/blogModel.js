import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const blogSchema = new Schema(
  {
    blogId: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    preview: {
      type: String,
    },
    markdown: {
      type: String,
    },
    tags: {
      type: [String],
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    updatedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Blogs",
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
