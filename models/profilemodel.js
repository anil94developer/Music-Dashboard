const db = require("../utils/dbConn");
const mongoose = require("mongoose");
let ObjectId = require("mongodb").ObjectID;


const profileSchema = new mongoose.Schema({
  companyName: { type: String },
  clientNumber: { type: String },
  mainEmailAddress: { type: String },
  royaltiesEmailAddress: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  postalAddress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  country: { type: String },
  defaultTimeZone: { type: String },
  defaultLanguage: { type: String },
}, { timestamps: true });

const profileModel = mongoose.model('Profile', profileSchema);

profileModel.addProfile = async (data) => {
  const result = await db.connectDb("Profile", profileSchema);
  let insData = await result.insertMany(data);
  console.log(insData);
  if (insData.length > 0) {
    return insData[0];
  } else {
    return false
  }
}

module.exports = profileModel;
