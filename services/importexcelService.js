const excelModel = require("../models/excelmodel");
var fs = require("fs");
const path = require("path");

const csv = require("csvtojson");

const importExcel = async (req, res) => {
  try {
    const user = []

    const filePath = req.file.path;
    const jsonArray = await csv().fromFile(filePath).then(async (responce) => {
        
        for(let i=0;i<responce.length;i++){
            user.push({
                "name":responce[i].name,
                "email":responce[i].email,
                "mobile":responce[i].mobile
            })
        }
        
         await excelModel.insertMany(user);

    });
    // console.log(jsonArray);
    res.status(200).json({ success: true, message: "Data imported successfully", data: jsonArray });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  importExcel,
};
