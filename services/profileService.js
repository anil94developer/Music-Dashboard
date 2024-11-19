const profileModel = require("../models/profilemodel");
const R = require("../utils/responseHelper");
const profile = {};


profile.add=async(req,res,next) => {
    try {
        let data=req.body;
        console.log(data);
        if (!data) {
          return R(res, false, "Data is required", {}, 400);
        }
        
        const profileData=await profileModel.addProfile(data);

        return R(res, "Profile added successfully",profileData,201);
    } catch (error) {
        next(error);
    }
}


module.exports = profile;