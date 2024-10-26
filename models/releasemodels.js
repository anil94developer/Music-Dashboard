const db = require("../utils/dbConn");
const mongoose = require("mongoose"); 

releaseModel={} 

 
const releaseSchema = mongoose.Schema({
    userId:{type:String},
    title: { type: String,required: true }, 
    type: { type: String, required: true }, 
    step1:{ 
        subTitle: { type: String, default: null },
        primaryArtist: { type: String, default: null },
        featuring: { type: String, default: null },
        genre: { type: String, default: null },
        subGenre: { type: String, default: null }, 
        labelName: { type: String, default: "" },
        format: { type: String, default: "" },
        originalReleaseDate: { type: String, default: "" },
        line: { type: String, default: "" },
        cline: { type: String, default: "" },
        productionYear: { type: String, default: "" },
        UPCEAN: { type: String, default: "" },
        producerCatalogueNumber: { type: String, default: "" }
      } 
},
{ timestamps: true }
);

releaseModel.addOneRelease = async (data) => {
    const result = await db.connectDb("release", releaseSchema);
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
       return false 
    }
};

releaseModel.addOneStepRelease = async (body) => {
    console.log("one release body",body)
    let releaseResult =await db.connectDb("release",releaseSchema);
        let result = await releaseResult.updateOne({_id:body._id},
            {$set:{
                title:body.title,
                type:body.type,
                step1:{
                    subTitle: body.step1.subTitle,
                    primaryArtist: body.step1.primaryArtist,
                    featuring: body.step1.featuring,
                    genre: body.step1.genre,
                    subGenre: body.step1.subGenre, 
                    labelName: body.step1.labelName,
                    format: body.step1.format,
                    originalReleaseDate: body.step1.originalReleaseDate,
                    line: body.step1.line,
                    cline: body.step1.cline,
                    productionYear: body.step1.productionYear,
                    UPCEAN: body.step1.UPCEAN,
                    producerCatalogueNumber: body.step1.producerCatalogueNumber
                }
            }}) 
        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            return true;
        } else {
            return false;
        }
};


module.exports = releaseModel