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

// path
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// favicon
import favicon from "express-favicon";

// ===== DB CONNECTION =====
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ===== MIDDLEWARE =====

app.use(favicon(__dirname + "/assets/favicon.png"));
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
      secure: true,
      sameSite: true,
      httpOnly: true,
      signed: true,
      overwrite: true,
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
  const registrationCode = req.body.registrationCode;

  if (registrationCode !== process.env.REGISTRATION_CODE) {
    res.json({ registration: false, message: "Invald registration code." });
    return;
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    addUser(username, hash, (err, result) => {
      if (err) {
        if (err.code === 11000) {
          res.json({
            registration: false,
            message: "Username already exists.",
          });
        } else {
          res.json({
            registration: false,
            message: "Unknown error: please try again later.",
          });
        }
        return;
      }
      res.json({
        registration: true,
        message: "Successfully created user. Redirecting...",
        username: result.username,
      });
    });
  });
});

// ROUTE "/login" - GET, POST
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.json({ auth: true, username: req.session.user.username });
    return;
  }
  res.json({ auth: false });
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
        // add session to cookies
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
