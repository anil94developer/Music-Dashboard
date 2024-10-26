const db = require("../utils/dbConn");
const mongoose = require("mongoose");

releaseModel = {}


const releaseSchema = mongoose.Schema({
    userId: { type: String },
    title: { type: String, required: true },
    type: { type: String, required: true },
    step1: {
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
    },
    step2: [
        {
            fileName: { type: String, default: "" },
            fileType: { type: String, default: "" },
            fileData: { type: String, default: "" },
        }
    ],
    step3:[
        {
            ContentType: { type: String, default: "AudioVideo" },
            PrimaryTrackType: { type: String, default: "Music" },
            SecondaryTrackType: { type: String, default: "Original" },
            Instrumental: { type: Boolean, default: false },
            Title: { type: String, default: "" },
            VersionSubtitle: { type: String, default: "" },
            PrimaryArtist: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Featuring: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Remixer: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Author: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Composer: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Arranger: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Producer: [
              {
                id: { type: String, default: "" },
                name: { type: String, default: "" }
              }
            ],
            Pline: { type: String, default: "" },
            ProductionYear: { type: Number, default: 2023 },
            Publisher: { type: String, default: "" },
            ISRC: { type: String, default: "" },
            GenerateISRC: { type: Boolean, default: true },
            Genre: { type: String, default: "" },
            Subgenre: { type: String, default: "" },
            SecondaryGenre: { type: String, default: "" },
            SubSecondaryGenre: { type: String, default: "" },
            Price: { type: String, default: "" },
            ProducerCatalogueNumber: { type: String, default: "" },
            ParentalAdvisory: { type: String },
            PreviewStart: { type: String, default: "" },
            TrackTitleLanguage: { type: String, default: "" },
            LyricsLanguage: { type: String, default: "" },
            Lyrics: { type: String, default: "" },
            MoreInfo: { type: String, default: "" }
          }
    ],
    step4:[
        {
            id: { type: String, default: "" },
            countryName: { type: String, default: "" },
            checked: { type: Number, default: 1 }

          }
    ]
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
    console.log("one release body", body)
    let releaseResult = await db.connectDb("release", releaseSchema);
    let result = await releaseResult.updateOne({ _id: body._id },
        {
            $set: {
                title: body.title,
                type: body.type,
                step1: {
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

            }
        })
    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};

releaseModel.addTwoStepRelease = async (body) => {
    console.log("one release body", body)
    let releaseResult = await db.connectDb("release", releaseSchema);
    
    let result = await releaseResult.updateOne({ _id: body._id },
        {
            $set: { 
                step2:body.step2
            }
        })
    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};

releaseModel.addThreeStepRelease = async (body) => {
    console.log("one release body", body)
    let releaseResult = await db.connectDb("release", releaseSchema);
    
    let result = await releaseResult.updateOne({ _id: body._id },
        {
            $set: { 
                step3:body.step3
            }
        })
    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};
releaseModel.addFourStepRelease = async (body) => {
    console.log("one release body", body)
    let releaseResult = await db.connectDb("release", releaseSchema);
    
    let result = await releaseResult.updateOne({ _id: body._id },
        {
            $set: { 
                step4:body.step4
            }
        })
    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};


module.exports = releaseModel