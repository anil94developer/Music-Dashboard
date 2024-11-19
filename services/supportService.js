const SupportModal = require("../models/supportmodeals");
const R = require("../utils/responseHelper");
const support = {};

support.addData = async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    if (!data) {
      return R(res, false, "Data is required", {}, 400);
    }

    //Add your data logic here
    const supportData = await SupportModal.addSupport(data);
    if (supportData == false) {
      return R(res, false, "Data not added successfully", {}, 400);
    }

    return R(res, true, "Data added successfully", supportData, 201);
  } catch (error) {
    next(error);
  }
};

support.listdata=async (req,res,next) => {
    try {
        const supportData = await SupportModal.supportList();
        if (!supportData) {
            return R(res, false, "Data not found", {}, 404);
        }

        return R(res, true, "Data fetched successfully", supportData, 200);
    } catch(error){
        next(error);
    }
}

module.exports = support;
