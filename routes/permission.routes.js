const express = require("express")
const router = express.Router();
const verifyToken = require("../utils/verifyToken");
const permission = require("../services/permissionService")

router.post('/permission',verifyToken,permission.add);

module.exports = router 