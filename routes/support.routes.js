const express = require("express")
const router = express.Router(); 
const verifyToken = require("../utils/verifyToken");
const multer = require("multer");
const SupportModal = require("../models/supportmodeals");
 
 
  
router.post('/add-support', verifyToken, SupportModal.addSupport)
router.get('/support-list', verifyToken, SupportModal.supportList)











module.exports = router 