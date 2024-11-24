const express = require("express")
const router = express.Router();
const verifyToken = require("../utils/verifyToken");
const wallet = require("../services/walletService");

router.post('/add',wallet.transactions);

module.exports = router;