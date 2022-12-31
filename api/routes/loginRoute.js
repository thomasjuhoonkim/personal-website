import express from "express";
const loginRouter = express.Router();

import { loginRateLimiter } from "../middleware/rateLimiterMiddleware.js";

import {
  authorizeSessionUser,
  authorizeLoginUser,
} from "../controllers/userController.js";

// PARENT ROUTE "/login"
loginRouter.get("/", authorizeSessionUser);
loginRouter.post("/", loginRateLimiter, authorizeLoginUser);

export default loginRouter;
