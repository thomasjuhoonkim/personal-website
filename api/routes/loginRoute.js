import express from "express";
const loginRouter = express.Router();

import {
  authorizeSessionUser,
  authorizeLoginUser,
} from "../controllers/userController.js";

// PARENT ROUTE "/login"
loginRouter.get("/", authorizeSessionUser);
loginRouter.post("/", authorizeLoginUser);

export default loginRouter;
