const serverless = require("serverless-http");
const app = require('../configs/server.cjs');

module.exports.handler = serverless(app);