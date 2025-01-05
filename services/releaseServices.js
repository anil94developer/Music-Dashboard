const R = require("../utils/responseHelper");
const releaseModel = require('./../models/releasemodels')
const express = require('express');
const multer = require('multer');
const nodemailer = require("nodemailer");
const path = require('path');
const { uploadOnCloudinary } = require("../utils/cloudinary");
const release = {};

release.addOneRelease = async (req, res, next) => {
    const { type,title } = req.body
    // console.log("userId=======",req.doc.userId); 
    
    try { 
        const newReq = {
            userId: req.doc.userId,
            title: title,
            type: type
        }
        // console.error(newReq)
        const result = await releaseModel.addOneRelease(newReq) 
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.addOneStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        // console.log("bodyData====",body);
        const result = await releaseModel.addOneStepRelease(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.addTwoStepRelease = async (req, res) => {
    try {
        const id = req.body.id;
        const localFilePath = req.file?.path;

        if (!localFilePath) {
            return res.status(400).json({ status: false, message: "File is missing." });
        }
        // console.log("File data:", JSON.stringify(files));
        // Extract file metadata
        const fileDataSet = files.map((file) => ({
            fileName: file.originalname,
            fileData: file.path, // Replace with cloud storage URL if applicable
            fileType: file.mimetype.includes("audio") ? "audio" : "video",
        }));

        
        const cloudinaryUrl = await uploadOnCloudinary(localFilePath, "audio");
        
        console.log("cloudinaryUrl ---------------------------", cloudinaryUrl);
        // const fileDataSet = [
        //     {
        //         fileName: req.file.originalname,
        //         fileData: cloudinaryUrl,
        //         fileType: req.file.mimetype.startsWith("audio") ? "audio" : "video",
        //     },
        // ];

      //  const result = await releaseModel.addTwoStepRelease(id, fileDataSet);
        // console.log("Database update result:", result);

        // if (result) {
        //     return res.status(200).json({ status: true, message: "Files uploaded successfully!" });
        // } else {
        //     return res.status(400).json({ status: false, message: "Failed to update release." });
        // }
    } catch (error) {
        // console.error("File upload error:", error);
        res.status(500).json({ status: false, message: "File upload failed", error });
    }
};


// release.addTwoStepRelease = async (req, res, next) => {
//     try {
//         const { id } = req.body_id;
//         const files = req.files;
//        console.log("filesfilesfilesfiles=====",files)
//         // Extract paths and file metadata to store in DB
//         const fileData = files.map(file => ({
//             fileName: file.originalname,
//             fileData: file.path,
//             fileType: file.mimetype.includes("audio") ? "audio" : "video"
//         }));

//         // Save to DB here, e.g., via your release model or database handler
//         console.log("fileData===",fileData);
//         const result = await releaseModel.addTwoStepRelease(id,fileData) 
//         console.log("video audio upload log=====>",result)
//         res.status(200).json({ status: true, message: 'Files uploaded successfully!' });
//     } catch (error) {
//         res.status(500).json({ status: false, message: 'File upload failed', error });
//     }

//     // const  body  = req.body 
//     // try {  
//     //     const result = await releaseModel.addTwoStepRelease(body) 
//     //     return R(res, true, "Update Successfully!!", result, 200)
//     // } catch (err) { 
//     //     next(err)
//     // }
// };

const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email from environment variables
    pass: process.env.EMAIL_PASSWORD, // Your email password from environment variables
  },
});


release.addThreeStepRelease = async (req, res, next) => {
    const body = req.body
    try {
        const result = await releaseModel.addThreeStepRelease(body)
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.addFourStepRelease = async (req, res, next) => {
    const body = req.body
    try {
        const result = await releaseModel.addFourStepRelease(body)
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.addFiveStepRelease = async (req, res, next) => {
    const body = req.body
    try {
        const result = await releaseModel.addFiveStepRelease(body)
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.submitFinalRelease = async (req, res, next) => {

    const body = req.body;
    try {
        const result = await releaseModel.submitFinalRelease(body)
        return R(res, true, "Final Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};

release.releaseList = async (req, res, next) => {
    try {
      const statusFilter = req.query.status; // Default to all statuses if none are provided
      console.log(">>>>>>>",statusFilter);
      const result = await releaseModel.releaseList(req.doc.userId, statusFilter);
      return R(res, true, "Fetch Successfully!!", result, 200);
    } catch (err) {
      next(err);
    }
  };
  
release.allReleaseList = async (req, res, next) => {
    try {
        const result = await releaseModel.allReleaseList(req.doc.userId)
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};

release.releaseDetails = async (req, res, next) => {
    let { releaseId } = req.body;
    try {
        const result = await releaseModel.releaseDetails(releaseId)
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};

release.updateStatus = async (req, res, next) => {
    let body = req.body;
    try {
        const result = await releaseModel.updateStatus(body);
        const email = await releaseModel.getEmail(body);
        console.log(email);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Status Update Notification",
            text: `Hello, your status has been updated to: ${body.status}`,
        };
        if(body.status === "Approve" || body.status === "Reject") {
           // Send email
            try {
                const emailResponse = await transporter.sendMail(mailOptions);
                console.log("Email sent:", emailResponse);
                return R(res,true,"Status Updated Successfully",{},200);
            } catch (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ success: false, message: "Status updated but email not sent" });
            }
        }
        return R(res, true, "Status Updated Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};



release.addLabel = async (req, res, next) => {
    const body = {
        ...req.body,           // Spread the existing keys from req.body
        userId: req.doc.userId // Add a new key `userId` from req.doc
    };
    try {
        const result = await releaseModel.addLabel(body)
        if(result === "Cannot add more labels. Maximum limit reached."){
            return R(res, false,"Cannot add more labels. Maximum limit reached.", {}, 400)
        }
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};

release.labelList = async (req, res, next) => {
    try {
        const result = await releaseModel.labelList(req.doc.userId)
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};

release.trackUpdate = async (req, res, next) => {
    const body = req.body
    try {
        const result = await releaseModel.trackUpdate(body)
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.tracksList = async (req, res, next) => {
    const userId = req.doc.userId
    try {
        const result = await releaseModel.tracksList(userId)
        return R(res, true, "Tracks Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};


release.addStore = async (req, res, next) => {
    const body = req.body
    try {
        const result = await releaseModel.addStore(body)
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};
release.storeList = async (req, res, next) => {
    try {
        const result = await releaseModel.storeList(req.doc.userId)
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) {
        next(err)
    }
};


module.exports = release;