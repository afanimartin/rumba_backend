const express = require("express");

const app = express();

app.listen(process.env.PORT);

module.exports = app; // for testing
