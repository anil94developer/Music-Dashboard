const express = require("express")
const router = express.Router();
const releaseService = require("../services/releaseServices"); 
const verifyToken = require("../utils/verifyToken");

router.post('/add-one-release',verifyToken, releaseService.addOneRelease)
router.post('/step-one-release',verifyToken, releaseService.addOneStepRelease)
router.post('/step-two-release',verifyToken, releaseService.addTwoStepRelease)
router.post('/step-three-release',verifyToken, releaseService.addThreeStepRelease)
router.post('/step-four-release',verifyToken, releaseService.addFourStepRelease)






module.exports = router 