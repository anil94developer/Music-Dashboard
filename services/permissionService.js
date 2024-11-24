const permissionmodel = require("../models/permissionmodel");
const R = require("../utils/responseHelper");


permission = {};


permission.add = async (req, res, next) => {
    try {
        const data = req.body;
        const userId= req.doc.userId;
        if (!data) {
            return R(res, false, "Invalid data", "", 400);
        }
        const user = await authModel.permission(data);
        console.log(">>djsajhdh", user);
  
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
        console.log("Error in permission.add", err);
        return R(res, false, "Failed to add permission", "", 500);
    }
}
module.exports = permission;
