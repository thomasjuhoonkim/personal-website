// ===== IMPORTS =====

// server
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
const serverLink =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${port}`
    : `https://api.thomasjuhoonkim.me:${port}`;
const adminLink =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://admin.thomasjuhoonkim.me";
const clientLink =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.thomasjuhoonkim.me";

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
import favicon from "serve-favicon";

// ===== DB CONNECTION =====
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ===== AUTHENTICATION MIDDLEWARE FUNCTIONS =====

const authenticateKey = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (apiKey === process.env.API_KEY) next();
  else res.status(403).send("Invalid API Key");
};

// ===== MIDDLEWARE =====

app.use(favicon(path.join(__dirname, "/assets/favicon.png")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [clientLink, adminLink],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
// express trust proxy setting for heroku
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(
  cookieSession({
    key: "session",
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
// monitor wildcard for performance? this isn't strictly necessary
// after all, who is purposefully going to thomasjuhoonkim-api.herokuapp.com
app.use((req, res, next) => {
  const host = req.header("host");
  if (host.match(/.*herokuapp\..*/)) {
    res.redirect(301, "https://api.thomasjuhoonkim.me" + req.originalUrl);
  } else next();
});
app.use(authenticateKey);

// ===== CONTROLLERS =====

import {
  addUser,
  userExists,
  getUserById,
  getUserByUsername,
} from "./controllers/userController.js";

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
  if (!req.session.user) {
    res.json({ auth: false });
    return;
  }
  userExists({ _id: req.session.user.id }).then((result) => {
    if (result) {
      req.session.now = Date.now();
      res.json({ auth: true, username: req.session.user.username });
    } else {
      req.session = null;
      res.json({ auth: false });
    }
  });
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
        req.session.user = { id: result._id, username: result.username };
        req.session.now = Date.now();

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

// ROUTE "/blogs" - GET
app.get("/blogs", (req, res) => {
  const data = [
    {
      blogId: "hello",
      title: "This is a test title. This is a test title.",
      subtitle:
        "This is a test subtitle. This is a test subtitle. This is a test subtitle. This is a test subtitle.",
      route: "/blog/hello",
      preview: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer rhoncus mattis lectus, vel volutpat magna
      posuere vitae. Duis non sem sed enim placerat malesuada. Vestibulum
      sapien lorem, sollicitudin at velit ac, pharetra commodo urna. Duis
      commodo ullamcorper urna ultricies consequat. Nullam id cursus nunc.
      Vestibulum metus lacus, ornare eget imperdiet ut, commodo fringilla
      nisi. Cras pellentesque, magna in consequat interdum, purus mi
      volutpat dui, et aliquam tortor ipsum sit amet tellus. Curabitur
      fermentum porta aliquet. Donec congue, dui non venenatis pellentesque,
      mauris nisl sollicitudin eros, non commodo enim est a augue. Vivamus
      placerat, elit et ultrices rhoncus, nisi risus sagittis lorem, at
      sodales lectus risus id nulla. Praesent ullamcorper, ipsum ac
      vestibulum pulvinar, odio lacus gravida elit, eget malesuada erat
      velit eu ipsum. Vivamus auctor metus tincidunt odio sodales, in
      vestibulum nibh euismod.`,
      markdown: `# hello
  ## hello
  ### hello
  #### hello
  ##### hello
  ###### hello
  
  A paragraph with *emphasis* and **strong importance**.
  
  > A block quote with ~~strikethrough~~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  | a | b | 1 |
  |:--|:--|:--|
  | c | d | 2 |
  | e | f | 3 |
  | g | h | 4 |
  | g | h | 4 |
  | g | h | 4 |
  | g | h | 4 |
  
  ~~~js
  import Markdown from '../../components/Markdown/Markdown';
  console.log("hello world!");
  ~~~
  `,
      date: "Dec 14, 2022",
      tags: ["Test", "Test", "Test"],
    },
  ];
  res.json(data);
});

// DYNAMIC ROUTE "/blog/:blogId - GET
app.get("/blogs/:blogId", (req, res) => {
  const blogId = req.params.blogId;
  const data = {
    blogId: "hello",
    title: "This is a test title. This is a test title.",
    subtitle:
      "This is a test subtitle. This is a test subtitle. This is a test subtitle. This is a test subtitle.",
    route: "/blog/hello",
    preview: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Integer rhoncus mattis lectus, vel volutpat magna
    posuere vitae. Duis non sem sed enim placerat malesuada. Vestibulum
    sapien lorem, sollicitudin at velit ac, pharetra commodo urna. Duis
    commodo ullamcorper urna ultricies consequat. Nullam id cursus nunc.
    Vestibulum metus lacus, ornare eget imperdiet ut, commodo fringilla
    nisi. Cras pellentesque, magna in consequat interdum, purus mi
    volutpat dui, et aliquam tortor ipsum sit amet tellus. Curabitur
    fermentum porta aliquet. Donec congue, dui non venenatis pellentesque,
    mauris nisl sollicitudin eros, non commodo enim est a augue. Vivamus
    placerat, elit et ultrices rhoncus, nisi risus sagittis lorem, at
    sodales lectus risus id nulla. Praesent ullamcorper, ipsum ac
    vestibulum pulvinar, odio lacus gravida elit, eget malesuada erat
    velit eu ipsum. Vivamus auctor metus tincidunt odio sodales, in
    vestibulum nibh euismod.`,
    markdown: `# hello
## hello
### hello
#### hello
##### hello
###### hello

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~~strikethrough~~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:
| a | b | 1 |
|:--|:--|:--|
| c | d | 2 |
| e | f | 3 |
| g | h | 4 |
| g | h | 4 |
| g | h | 4 |
| g | h | 4 |

~~~js
import Markdown from '../../components/Markdown/Markdown';
console.log("hello world!");
~~~
`,
    date: "Dec 14, 2022",
    tags: ["Test", "Test", "Test"],
  };
  res.json(data);
});

// ===== APP =====

app.listen(port, () => {
  console.log(`Server listening on ${serverLink}`);
});
