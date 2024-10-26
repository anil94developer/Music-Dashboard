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
            type: type, 
            step1:{
                "subTitle": "",
                "primaryArtist": "",
                "featuring": "",
                "genre": "",
                "subGenre": "", 
                "labelName": "",
                "format": "",
                "originalReleaseDate": "",
                "line": "",
                "cline": "",
                "productionYear": "",
                "UPCEAN": "",
                "producerCatalogueNumber": ""
            },
            step2:[
                {
                    "fileName":"", 
                    "fileType":"",
                    "fileData":"",
                }
            ]
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



module.exports = release;



