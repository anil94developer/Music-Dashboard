const profileModel = require("../models/profilemodel");
const authModel = require("../models/authmodels");
const R = require("../utils/responseHelper");
const profile = {};


profile.update=async(req,res,next) => {
    try {
        const id = req.params.id;
        if (!id) {
          return R(res, false, "ID is required", {}, 400);
        }


        let data=req.body;
        console.log(data);
        if (!data) {
          return R(res, false, "Data is required", {}, 400);
        }
        
        const profileData=authModel.updateProfile(id,data);
        
        return R(res, "Profile updated successfully",profileData,201);
    } catch (error) {
        next(error);
    }
}


module.exports = profile;