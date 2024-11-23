const express = require("express")
const router = express.Router();
const verifyToken = require("../utils/verifyToken");

router.post('/',verifyToken,()=>{
    // Add your code here to handle the POST request
    console.log("POST request received");
    // You can return a response here if needed
});

module.exports = router;