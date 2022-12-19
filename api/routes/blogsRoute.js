import express from "express";
const blogsRouter = express.Router();

import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import { authenticateToken } from "../middleware/authenticationMiddleware.js";

// PARENT ROUTE "/blogs"

// PUBLIC ROUTES
blogsRouter.get("/", getBlogs);
blogsRouter.get("/:blogId", getBlog);

// PROTECTED ROUTES
blogsRouter.post("/", authenticateToken, createBlog);
blogsRouter.put("/:blogId", authenticateToken, updateBlog);
blogsRouter.delete("/:blogId", authenticateToken, deleteBlog);

export default blogsRouter;
