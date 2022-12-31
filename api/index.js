// ===== IMPORTS =====

// server
import express from "express";
const app = express();
app.get("/", (req, res) => res.send("choo choo"));

// db
import mongoose from "mongoose";

// environment variables
import dotenv from "dotenv";
dotenv.config();

// ===== DB CONNECTION =====

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ===== CONFIG =====

// express trust proxy setting for heroku
app.set("trust proxy", 1);

// ===== MIDDLEWARE =====

import thirdPartyMiddleware from "./middleware/thirdPartyMiddleware.js";
import { authenticateKey } from "./middleware/authenticationMiddleware.js";
import { redirectHeroku } from "./middleware/redirectMiddleware.js";

// third party middleware
app.use(thirdPartyMiddleware);

// redirect heroku url traffic
app.use(redirectHeroku);

// api key authentication
app.use(authenticateKey);

// ===== ROUTES =====

import registerRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";
import blogRouter from "./routes/blogsRoute.js";

// ROUTE "/register" - POST
app.use("/register", registerRouter);

// ROUTE "/login" - GET, POST
app.use("/login", loginRouter);

// ROUTE "/blogs" - GET
// PROTECTED ROUTE "/blogs" - POST
// PROTECTED ROUTE "/blogs/:blogId" - GET, PUT, DELETE
app.use("/blogs", blogRouter);

// ===== APP =====

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.SERVER_LINK}`);
});
