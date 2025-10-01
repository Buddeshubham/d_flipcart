// const serverless = require("serverless-http");
// const app = require("../configs/server.cjs");

// module.exports = serverless(app); // ✅ default export


const app = require("../configs/server.cjs");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
