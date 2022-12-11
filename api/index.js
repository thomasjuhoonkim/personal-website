// ===== IMPORTS =====

// server
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
const link = "https://admin.thomasjuhoonkim.me";

// http
import cors from "cors";
import bodyParser from "body-parser";

//db
import mongoose from "mongoose";

// session
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

// json web token
import jwt from "jsonwebtoken";

// hashing
import bcrypt from "bcrypt";
const saltRounds = 10;

// environment variables
import dotenv from "dotenv";
dotenv.config();

// ===== DB CONNECTION =====
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ===== MIDDLEWARE =====

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [link, "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  cookieSession({
    key: "session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
    },
  })
);

// ===== CONTROLLERS =====

import { addUser, getUserByUsername } from "./controllers/userController.js";

// ===== ENDPOINTS =====

app.route("/").get((req, res) => {
  res.send("Hello world!");
});

// ROUTE "/register" - POST
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    addUser(username, hash, (result) => {
      if (!result) {
        res.status(422);
        res.send("Unable to register.");
        return;
      }
      res.status(201);
      res.json({
        message: "Successfully created user.",
        username: result.username,
      });
    });
  });
});

// ROUTE "/login" - GET, POST
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.json({ auth: true, username: req.session.user.username });
  }
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  getUserByUsername(username).then((result) => {
    if (result === null) {
      res.json({ auth: false, message: "Incorrect username or password." });
      return;
    }
    bcrypt.compare(password, result.password, (err, matches) => {
      if (matches === true) {
        // add
        req.session.user = { username: result.username };

        // json web token
        const token = jwt.sign(
          { username: result.username },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        );

        res.json({
          auth: true,
          token: token,
          message: "Successfully logged in, redirecting...",
        });
        return;
      }
      res.json({
        auth: false,
        message: "Incorrect username or password.",
      });
    });
  });
});

// ===== APP =====

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
