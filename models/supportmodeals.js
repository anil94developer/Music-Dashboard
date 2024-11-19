const mongoose = require('mongoose');
const db = require("../utils/dbConn");

const supportSchema = new mongoose.Schema({
  issueType: { type: String },
  email: { type: String },
  clientNumber: { type: String },
  country: { type: String },
  description: { type: String },
  motionType: { type: String },
  motionLink: { type: String },
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
    // let fetData = await result.find({ _id: uId }, { step3: 1 });
    // let arr=[];
    // if (fetData.length > 0) {
    //   arr = fetData.reduce((acc, item) => acc.concat(item.step3), []); // Flatten each step3 array into a single array
    // }  
    //   return arr;
      
    const fetchedData =await result.find({});
    if (fetchedData.length > 0) {
    return fetchedData;
    }
    return false;


  };


module.exports = SupportModal;
