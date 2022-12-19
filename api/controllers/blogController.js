// strip markdown
import { remark } from "remark";
import strip from "strip-markdown";

// Blog model
import Blog from "../models/blogModel.js";

const processBlog = async (blog) => {
  const strippedMarkdown = await remark().use(strip).process(blog.markdown);
  const processedMarkdown = strippedMarkdown.value.replace(/\n\n|\r\r/g, " ");
  const slicedMarkdown = processedMarkdown.slice(0, 200);
  blog.preview = `${blog.subtitle} - ${slicedMarkdown}`;

  return blog;
};

// ===== CONTROLLERS ======

export const getBlogs = (req, res) => {
  Blog.find({}, (err, result) => {
    return res.json(result);
  });
};

export const getBlog = (req, res) => {
  const blogId = req.params.blogId;
  Blog.findOne({ blogId: blogId }, (err, result) => {
    return res.json(result);
  });
};

export const createBlog = async (req, res) => {
  const blog = await processBlog(req.body);
  Blog.create(blog, (err, result) => {
    return res.status(201).json(result);
  });
};

export const updateBlog = async (req, res) => {
  const blogId = req.params.blogId;
  const updatedBlog = await processBlog(req.body);
  Blog.findOneAndUpdate({ blogId: blogId }, updatedBlog, (err, result) => {
    return res.json(result);
  });
};

export const deleteBlog = (req, res) => {
  const blogId = req.params.blogId;
  Blog.findOneAndDelete({ blogId: blogId }, (err, result) => {
    return res.status(204);
  });
};
