const serverless = require("serverless-http");
// server.js
const app = require('../configs/server.cjs'); // or your main app file

// In serverless, export the handler
if (process.env.IS_SERVERLESS) {
  module.exports = app;
} else {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Cloud server running on port ${PORT}`);
  });
}