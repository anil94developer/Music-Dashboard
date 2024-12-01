const R = require("../utils/responseHelper");
const { Track } = require("../models/csvdatamodel");
const upload = {}

upload.track = async (req, res, next) => {
  try {
    const { userId, data } = req.body;
    if (!data) {
      return R(res, false, "Data not found", "", 400);
    }
    data.map(async (val, ind, arr) => {
      val = await Track.create(userId, arr[ind]);
      if (!val) {
        return R(res, false, "Excel file not found", "", 400);
      }
    //  return val;
    })
    return R(res, true, "Track upload successful", "", 200)
  }
  catch (e) {
    console.log("==========>",e)
    next();
  }
}

upload.getTrack = async (req, res, next) => {
  try {
    const userId = req.doc.userId;
    console.log(userId);

    const track = await Track.get(userId);

    if (track.length <= 0) {
      return R(res, false, "Track not found", "", 400);
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>", track);
    return R(res, true, "Track fetched successfully", track, 200);
  } catch (err) {
    next();
  }
}

module.exports = upload;