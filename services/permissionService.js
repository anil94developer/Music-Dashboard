const permissionmodel = require("../models/permissionmodel");
const R = require("../utils/responseHelper");


permission = {};


permission.add = async (req, res, next) => {
    try {
        const data = req.body;
        const userId = req.doc.userId;

        if (!data) {
            return R(res, false, "Invalid data", "", 400);
        }
        const user = await authModel.permission(data);
        console.log(">>", user);

        if (!user) {
            return R(res, false, "User alreaedy registered", "", 404);
        }


        const permissions = await permissionmodel.addPermission(userId,user._id, data);
        if (!permissions) {
            return R(res, false, "Failed to add permission", "", 500);
        }

        return R(res, true, "Permission added successfully", data, 201);
    }
    catch (err) {
        console.log("Error in permission.addddddd", err);
        return R(res, false, "Failed to add permission", "", 500);
    }
}

permission.update =async (req, res,next) => {
    try {
        const data = req.body;
        if (!data){
            return R(res, false, "Invalid data", "", 400);
        }

        const permissions = await permissionmodel.updatePermission(data.registerUserId, data);

        if (!permissions) {
            return R(res, false, "Failed to update permission", "", 500);
        }
        return R(res, true, "Permission updated successfully", data, 200);
}catch (err) {
    console.log("Error in permission.updateeeee", err);
    return R(res, false, "Failed to update permission", "", 500);
}
}
permission.listWithUserDetails =async (req,res,next)=>{
    try {
        const userId = req.doc.userId;
        const permissions = await permissionmodel.profilePermissions(userId);
        console.log("Permissions", permissions);
        if (!permissions) {
            return R(res, false, "Failed to list permissions", "", 500);
        }
        return R(res, true, "Permissions listed successfully", permissions, 200);
        
    } catch (err) {
        console.log("Error in permission.listtttttttt", err);
        return R(res, false, "Failed to list permissions", "", 500);
    }
}

permission.list =async (req,res,next)=>{
    try {
        const userId = req.doc.userId;
        const permissions = await permissionmodel.listPermissions(userId);
        console.log("Permissions", permissions);
        if (!permissions) {
            return R(res, false, "Failed to list permissions", "", 500);
        }
        return R(res, true, "Permissions listed successfully", permissions, 200);
        
    } catch (err) {
        console.log("Error in permission.listtttttttt", err);
        return R(res, false, "Failed to list permissions", "", 500);
    }
}

module.exports = permission;