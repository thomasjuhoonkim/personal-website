const fs = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");

const cert = fs.readFileSync("./ssl/server.crt", "utf8");
const ca = fs.readFileSync("./ssl/server.ca-bundle", "utf8");
const key = fs.readFileSync("./ssl/server.key", "utf8");
const options = {
  cert: cert,
  ca: ca,
  key: key,
};

const app = express();
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
app.use((req, res, next) => {
  if (req.protocol === "http") {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

const httpsPort = process.env.PORT || 443;
const httpsServer = https.createServer(options, app);
httpsServer.listen(httpsPort, () => {
  console.log(`HTTPS Server is running on port ${httpsPort}!`);
});
