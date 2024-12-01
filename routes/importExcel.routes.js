const upload = require("../services/importexcelService");
const verifyToken = require("../utils/verifyToken");
// const upload  = require("../helper/FileUploadHelper");

const router = require("express").Router();

router.post("/track",verifyToken,upload.track);

router.get("/track",verifyToken,upload.getTrack);


// router.post("/Store",verifyToken,upload.Store);

// router.get("/Store",verifyToken,upload.Store);

module.exports = router;