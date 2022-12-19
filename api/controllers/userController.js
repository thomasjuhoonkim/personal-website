// hashing
import bcrypt from "bcrypt";
const saltRounds = 10;

// json web token
import jwt from "jsonwebtoken";

// User model
import User from "../models/userModel.js";

// ===== CONTROLLERS =====

export const createUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const registrationCode = req.body.registrationCode;

  if (registrationCode !== process.env.REGISTRATION_CODE) {
    return res.json({
      registration: false,
      message: "Invald registration code.",
    });
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    User.create({ username: username, password: hash }, (err, result) => {
      if (err) {
        if (err.code === 11000) {
          return res.json({
            registration: false,
            message: "Username already exists.",
          });
        } else {
          return res.json({
            registration: false,
            message: "Unknown error: please try again later.",
          });
        }
      }
      return res.json({
        registration: true,
        message: "Successfully created user. Redirecting...",
        username: result.username,
      });
    });
  });
};

export const authorizeSessionUser = (req, res) => {
  if (!req.session.user) return res.json({ auth: false });
  User.exists({ _id: req.session.user.id }, (err, result) => {
    if (err) {
      req.session = null;
      return res.json({ auth: false });
    }
    // no result doesn't necissarily mean error has occured.
    if (result) {
      req.session.now = Date.now();
      return res.json({ auth: true, username: req.session.user.username });
    } else {
      req.session = null;
      return res.json({ auth: false });
    }
  });
};

export const authorizeLoginUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }, (err, result) => {
    if (result === null) {
      return res.json({
        auth: false,
        message: "Incorrect username or password.",
      });
    }
    bcrypt.compare(password, result.password, (error, matches) => {
      if (matches === true) {
        // add session to cookies
        req.session.user = { id: result._id, username: result.username };
        req.session.now = Date.now();

        // json web token
        const payload = { id: result._id, username: result.username };
        const options = { expiresIn: "24h" };
        const token = jwt.sign(payload, process.env.JWT_SECRET, options);

        return res.json({
          auth: true,
          token: token,
          message: "Successfully logged in, redirecting...",
        });
      }
      return res.json({
        auth: false,
        message: "Incorrect username or password.",
      });
    });
  });
};
