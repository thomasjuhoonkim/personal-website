const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");

const httpPort = process.env.PORT || 80;
const httpsPort = process.env.PORT || 443;
const hostname = process.env.HOST || "localhost";

const buildPath = path.join(__dirname, "../client/build");

const cert = fs.readFileSync("./ssl/server.crt", "utf8");
// const ca = fs.readFileSync("./ssl/server.ca-bundle", "utf8");
const key = fs.readFileSync("./ssl/server.key", "utf8");
const options = {
  cert: cert,
  // ca: ca,
  key: key,
};

const app = express();
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// const httpServer = http.createServer(app);
// httpServer.listen(httpPort, () => {
//   console.log(`HTTP Server is running on port ${httpPort}!`);
// });

const httpsServer = https.createServer(options, app);
httpsServer.listen(httpsPort, () => {
  console.log(`HTTPS Server is running on port ${httpsPort}!`);
});
