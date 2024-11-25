const importExcel = require("../services/importexcelService");
const upload  = require("../helper/FileUploadHelper");

const router = require("express").Router();

router.post("/importExcel", upload.single("file"), importExcel.importExcel);

module.exports = router;