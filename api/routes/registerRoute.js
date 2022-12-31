import express from "express";
const registerRouter = express.Router();

import { registerRateLimiter } from "../middleware/rateLimiterMiddleware.js";

import { createUser } from "../controllers/userController.js";

// PARENT ROUTE "/register"
registerRouter.post("/", registerRateLimiter, createUser);

export default registerRouter;
