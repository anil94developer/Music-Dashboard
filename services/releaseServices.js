const R = require("../utils/responseHelper"); 
const releaseModel =require('./../models/releasemodels')

const release = {};

release.addOneRelease = async (req, res, next) => {
    const { type,title } = req.body
    console.log("userId=======",req.doc.userId); 
    
    try { 
        const newReq = {
            userId:req.doc.userId,
            title: title,
            type: type
        }
        console.error(newReq)
        const result = await releaseModel.addOneRelease(newReq) 
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.addOneStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        const result = await releaseModel.addOneStepRelease(body) 
        return R(res, true, "Update   Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.addTwoStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        const result = await releaseModel.addTwoStepRelease(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.addThreeStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        const result = await releaseModel.addThreeStepRelease(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.addFourStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        const result = await releaseModel.addFourStepRelease(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.addFiveStepRelease = async (req, res, next) => {
    const  body  = req.body 
    try {  
        const result = await releaseModel.addFiveStepRelease(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};

release.releaseList= async (req, res, next) => { 
    try {  
        const result = await releaseModel.releaseList(req.doc.userId) 
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.releaseDetails= async (req, res, next) => { 
    let {releaseId} =req.body;
    try {  
        const result = await releaseModel.releaseDetails(releaseId) 
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};

release.addLabel= async (req, res, next) => { 
    const body = {
        ...req.body,           // Spread the existing keys from req.body
        userId: req.doc.userId // Add a new key `userId` from req.doc
    };
    try {  
        const result = await releaseModel.addLabel(body) 
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
release.labelList= async (req, res, next) => { 
    try {  
        const result = await releaseModel.labelList(req.doc.userId) 
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};

release.trackUpdate= async (req, res, next) => { 
    const body = req.body
    try {   
        const result = await releaseModel.trackUpdate(body) 
        return R(res, true, "Update Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};

 

module.exports = release;



