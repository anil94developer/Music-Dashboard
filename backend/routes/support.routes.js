const express = require("express")
const router = express.Router(); 
const verifyToken = require("../utils/verifyToken");
const uploadSingleIcon=require("../helper/FileUploadHelper");
const support= require("../services/supportService");
 
 
  
router.post('/add-support',verifyToken, uploadSingleIcon.single('file'),support.addData)
router.get('/support-list', verifyToken, support.listdata)











module.exports = router 