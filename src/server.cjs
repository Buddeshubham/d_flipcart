const serverless = require("serverless-http");
const app = require("../configs/server.cjs");

module.exports = serverless(app); // ✅ default export
