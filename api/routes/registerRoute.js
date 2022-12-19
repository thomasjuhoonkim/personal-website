import express from "express";

import { createUser } from "../controllers/userController.js";

const registerRouter = express.Router();

// PARENT ROUTE "/register"
registerRouter.post("/", createUser);

export default registerRouter;
