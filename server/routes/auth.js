"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var auth_1 = require("../controllers/auth");
var router = express.Router();
router.post('/authenticate', auth_1.authenticateUser);
exports.default = router;
