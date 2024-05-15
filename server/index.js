"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var auth_1 = require("./routes/auth");
dotenv.config(); // Load environment variables from .env file
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', auth_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is running at PORT ".concat(PORT));
});
