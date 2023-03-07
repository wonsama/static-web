require("dotenv").config();
const express = require("express");

const app = express();

const path = require("path");

const WEB_ROOT = process.env.WEB_ROOT || "../public";
const WEB_PORT = parseInt(process.env.WEB_PORT || "3000");

console.log(WEB_ROOT, WEB_PORT);

const publicPath = path.join(__dirname, WEB_ROOT);
app.use(express.static(publicPath));

app.listen(WEB_PORT, () => {
  console.log(`your server is run at http://localhost:${WEB_PORT}`);
});
