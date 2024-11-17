const express = require("express")
const router = express.Router();
const releaseService = require("../services/releaseServices");
const verifyToken = require("../utils/verifyToken");
const multer = require("multer");

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Ensure the 'uploads' folder exists
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });
  // const upload1 = multer({ dest: 'uploads/' }); // Configure the destination folder
  const upload1 = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Adjust the directory as needed
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })
  }).array('mediaFiles'); 
  
router.post('/add-one-release', verifyToken, releaseService.addOneRelease)
// router.post('/step-one-release', verifyToken, releaseService.addOneStepRelease)
router.post('/step-one-release', verifyToken, upload.single('coverImage'), async (req, res, next) => {
    try {
      // Attach the file path to req.body
      if (req.file) {
        req.body.coverImage = req.file.path; // Set file path in req.body for access in service
      }
      console.log("req.body====", req.body);
      // Call the release service function
      await releaseService.addOneStepRelease(req, res, next);
    } catch (error) {
      console.error("Error in /step-one-release:", error);
      res.status(500).json({ status: false, message: "Server error" });
    }
  });
// router.post('/step-two-release', verifyToken, releaseService.addTwoStepRelease)
router.post('/step-two-release', verifyToken, upload1, releaseService.addTwoStepRelease);
router.post('/step-three-release', verifyToken, releaseService.addThreeStepRelease)
router.post('/step-four-release', verifyToken, releaseService.addFourStepRelease)
router.post('/step-five-release', verifyToken, releaseService.addFiveStepRelease)
router.get('/release-list', verifyToken, releaseService.releaseList)
router.post('/release-details', verifyToken, releaseService.releaseDetails)
router.post('/tracks-update', verifyToken, releaseService.trackUpdate)
router.get('/tracks-list', verifyToken, releaseService.tracksList)
router.get('/tracks-list', verifyToken, releaseService.tracksList)

 


router.post('/add-label',verifyToken, releaseService.addLabel)
router.get('/label-list',verifyToken, releaseService.labelList)

// router.post('/add-store',verifyToken, releaseService.addStore)
// router.get('/list-store',verifyToken, releaseService.storeList)











module.exports = router 