const upload = require("../services/importexcelService");
const verifyToken = require("../utils/verifyToken");
// const upload  = require("../helper/FileUploadHelper");

const router = require("express").Router();

router.post("/sent-track",verifyToken,upload.track);
router.get("/get-track",verifyToken,upload.getTrack);


router.post("/sent-store",verifyToken,upload.store);
router.get("/get-store",verifyToken,upload.getStore);

router.post("/sent-market",verifyToken,upload.marketData);
router.get("/get-market",verifyToken,upload.getMarketData);


router.post("/sent-salesyoutube",verifyToken,upload.salesYoutube);
router.get("/get-salesyoutube",verifyToken,upload.getMarketData);

router.post("/sent-stream",verifyToken,upload.salesYoutube);
router.get("/get-stream",verifyToken,upload.getMarketData);


router.post("/sent-salesyoutube",verifyToken,upload.salesYoutube);
router.get("/get-salesyoutube",verifyToken,upload.getMarketData);





module.exports = router;