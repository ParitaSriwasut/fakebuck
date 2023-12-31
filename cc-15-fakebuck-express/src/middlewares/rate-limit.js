const { rateLimit } = require("express-rate-limit");

module.exports = limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: "Too many requests from this IP",
});
