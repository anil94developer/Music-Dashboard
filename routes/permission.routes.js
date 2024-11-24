const express = require("express")
const router = express.Router();
const verifyToken = require("../utils/verifyToken");
const permission = require("../services/permissionService")

router.post('/add-permission',verifyToken,permission.add);
router.get("/list-permission",verifyToken,permission.list)

module.exports = router 