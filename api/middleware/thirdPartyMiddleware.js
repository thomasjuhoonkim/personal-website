// ===== IMPORTS =====

// express
import express from "express";

// session
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

// http
import cors from "cors";
import bodyParser from "body-parser";

// environment variables
import dotenv from "dotenv";
dotenv.config();

// path
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// favicon
import favicon from "serve-favicon";

// ===== THIRD PARTY MIDDLEWARE ======

// middleware router
const thirdPartyMiddleware = express.Router();
// json
thirdPartyMiddleware.use(express.json());
// favicon
thirdPartyMiddleware.use(
  favicon(path.join(__dirname, "../assets/favicon.png"))
);
// body parser
thirdPartyMiddleware.use(bodyParser.urlencoded({ extended: true }));
// cors
thirdPartyMiddleware.use(
  cors({
    origin: [
      process.env.CLIENT_LINK,
      process.env.ADMIN_LINK,
      "https://www.thomasjuhoonkim.me",
      "https://admin.thomasjuhoonkim.me",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
// cookie parser
thirdPartyMiddleware.use(cookieParser());
// cookie session
thirdPartyMiddleware.use(
  cookieSession({
    key: "session",
    keys: ["x", "y", "z"],
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    maxAge: 1 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
    httpOnly: true,
    signed: true,
    overwrite: true,
  })
);

export default thirdPartyMiddleware;
