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


router.post("/sent-salesYoutube",verifyToken,upload.salesYoutube);
router.get("/get-salesYoutube",verifyToken,upload.getSalesYoutube);

router.post("/sent-salesAsset",verifyToken,upload.salesAsset);
router.get("/get-salesAsset",verifyToken,upload.getSalesAssets);


router.post("/sent-stream",verifyToken,upload.salesStream);
router.get("/get-stream",verifyToken,upload.getStream);





module.exports = router;