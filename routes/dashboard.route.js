const express = require("express")
const router = express.Router();
const dashboardService = require("../services/dashboardService"); 
const verifyToken = require("../utils/verifyToken");

router.post('/get-dashboard',verifyToken, dashboardService.getDashboard) 

module.exports = router 