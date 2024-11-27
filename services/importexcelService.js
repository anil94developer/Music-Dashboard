const excelModel = require("../models/excelmodel");
var fs = require("fs");
const path = require("path");
const csvParser = require("csv-parser");
const xlsx = require("xlsx");

// const csv = require("csvtojson");

// Parse CSV file
function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
}

// Parse Excel file
function parseExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // First sheet
  const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return data;
}

const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded." });

    const filePath = path.resolve(file.path);
    let data;

    // Determine file type and parse accordingly
    if (file.mimetype === "text/csv") {
      data = await parseCSV(filePath);
    } else if (
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype === "application/vnd.ms-excel"
    ) {
      data = parseExcel(filePath);
    } else {
      return res.status(400).json({ message: "Unsupported file format." });
    }

    console.log("data>>>>", data);
    if (!data || data.length === 0) {
      return res.status(400).json({ message: "No valid data to insert." });
    }

    // Insert data into MongoDB
    try {
      await excelModel.insertMany(data, { ordered: false }); 
      res.status(200).json({ message: "File data uploaded successfully." });
    } catch (insertError) {
      console.error("Insert Error:", insertError);
      res
        .status(500)
        .json({ message: "Error inserting data.", error: insertError.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing file.", error: error.message });
  }
};

module.exports = {
  uploadFile,
};
