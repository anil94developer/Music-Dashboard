const express = require("express")
const router = express.Router();
const releaseService = require("../services/releaseServices"); 
const verifyToken = require("../utils/verifyToken");

router.post('/add-one-release',verifyToken, releaseService.addOneRelease)
router.post('/step-one-release',verifyToken, releaseService.addOneStepRelease)


module.exports = router 