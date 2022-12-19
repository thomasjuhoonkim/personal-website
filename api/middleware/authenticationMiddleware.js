import jwt from "jsonwebtoken";

export const authenticateKey = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (!apiKey) return res.status(401).send("No API Key provided");
  if (apiKey === process.env.API_KEY) return next();
  else return res.status(403).send("Invalid API Key");
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("No token provided");
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Inavlid Token");
    else return next();
  });
};
