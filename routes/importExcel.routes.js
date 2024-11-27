const {uploadFile} = require("../services/importexcelService");
const upload  = require("../helper/FileUploadHelper");

const router = require("express").Router();

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;