// The client side server has been scrapped due to heroku ssl traffic being
// blocked at their aws load balancers.
// This renders my paid ssl certification useless, as such an https server can
// not be built and deployed on my part.

//==========================================

// const fs = require("fs");
const path = require("path");
const express = require("express");

// const cert = fs.readFileSync("./ssl/server.crt", "utf8");
// const ca = fs.readFileSync("./ssl/server.ca-bundle", "utf8");
// const key = fs.readFileSync("./ssl/server.key", "utf8");
// const options = {
//   cert: cert,
//   ca: ca,
//   key: key,
// };

const app = express();
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
// app.use((req, res, next) => {
//   if (req.protocol === "http") {
//     res.redirect(301, `https://${req.headers.host}${req.url}`);
//   }
//   next();
// });

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
