const mongoose = require('mongoose');
const db = require("../utils/dbConn");

const supportSchema = new mongoose.Schema({
  issueType: { type: String, required: true },
  email: { type: String, required: true },
  clientNumber: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  motionType: { type: String, required: true },
  motionLink: { type: String, required: true },
  attachments: { type: [String] }, // Store filenames or links for attachments
});

const SupportModal = mongoose.model('Support', supportSchema);


SupportModal.addSupport = async (data) => {
    const result = await db.connectDb("Support", supportSchema);
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
      return insData[0];
    } else {
      return false
    }
  };
  
  SupportModal.supportList = async (uId) => {
    const result = await db.connectDb("Support", supportSchema);
    let fetData = await result.find({ userId: uId }, { step3: 1 });
    let arr=[];
    if (fetData.length > 0) {
      arr = fetData.reduce((acc, item) => acc.concat(item.step3), []); // Flatten each step3 array into a single array
    }  
      return arr;
     
  };


module.exports = SupportModal;
