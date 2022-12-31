import rateLimit from "express-rate-limit";
import MongoStore from "rate-limit-mongo";
import { rateLimiterConstants } from "../constants/rateLimiterConstants.js";

// ===== LOGIN =====

const loginMongoConnection = new MongoStore({
  uri: process.env.MONGODB_RATE_LIMITER_URI,
  collectionName: "LoginRecords",
  expireTimeMs: rateLimiterConstants.expireTimeMs,
  errorHandler: console.error.bind(null, "rate-limit-mongo"),
});

const loginOptions = {
  store: loginMongoConnection,
  max: rateLimiterConstants.maxFailsByIP,
  windowMs: rateLimiterConstants.expireTimeMs,
  message: {
    auth: false,
    message: "Too many request, try again in 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
};

export const loginRateLimiter = rateLimit(loginOptions);

// ===== REGISTER =====

const registerMongoConnection = new MongoStore({
  uri: process.env.MONGODB_RATE_LIMITER_URI,
  collectionName: "RegisterRecords",
  expireTimeMs: rateLimiterConstants.expireTimeMs,
  errorHandler: console.error.bind(null, "rate-limit-mongo"),
});

const registerOptions = {
  store: registerMongoConnection,
  max: rateLimiterConstants.maxFailsByIP,
  windowMs: rateLimiterConstants.expireTimeMs,
  message: {
    auth: false,
    message: "Too many request, try again in 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
};

export const registerRateLimiter = rateLimit(registerOptions);
