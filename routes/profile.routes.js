const express = require("express");
const verifyToken = require("../utils/verifyToken");
const profile = require("../services/profileService");
const router = express.Router();

router.post('/profile/:id',verifyToken,profile.update)

module.exports = router 