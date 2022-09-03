const fs = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");

const port = process.env.PORT || 3000;
const hostname = "thomasjuhoonkim.me";

const buildPath = path.join(__dirname, "../client/build");

const cert = fs.readFileSync("./server.crt");
const ca = fs.readFileSync("./server.ca-bundle");
const key = fs.readFileSync("./server.key");
const options = {
  cert: cert,
  ca: ca,
  key: key,
};

const app = express();
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const httpsServer = https.createServer(options, app);
httpsServer.listen(port, hostname);
