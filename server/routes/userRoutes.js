const express = require("express");
const router = express.Router();
const API = require("../controllers/apiUser.js");

// router.post("/", API.createUser);
router.post("/register", API.createUser);

module.exports = router;
