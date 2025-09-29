// local.js
require('dotenv').config(); // Loads .env for local
const app = require('./configs/server.cjs'); // or your main app file
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Local server running on http://localhost:${PORT}`);
});