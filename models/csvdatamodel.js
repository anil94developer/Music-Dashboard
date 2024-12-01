
const db = require("../utils/dbConn");
const mongoose = require("mongoose");

Track ={}
const TrackSchema = new mongoose.Schema({
    userId: { 
        type: String, 
         // Ensure every bank record is linked to a user
    },
     Track: {
        type: String, // PAN is usually mandatory  // Ensure PAN is unique in the database
        trim: true,     // Remove extra whitespace
    },
    Quantity: {
        type: Number, // Account holder name should not be empty
        trim: true,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields


Track.create = async (userId,data)=>{
    const result = await db.connectDb("Track", TrackSchema);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
}

Track.get = async(userId)=>{
    const result = await db.connectDb("Track", TrackSchema);
    let trackData = await result.find({userId: userId});
    console.log(">>>>>>>>",trackData);
    if(trackData.length <= 0){
        return false;
    }
    console.log(trackData);
    return trackData;
}

const Store ={}

const StoreSchema = new mongoose.Schema({
    userId: { 
        type: String, 
         // Ensure every bank record is linked to a user
    },
     Store: {
        type: String, // PAN is usually mandatory
        unique: true,   // Ensure PAN is unique in the database
        trim: true,     // Remove extra whitespace
    },
    Quantity: {
        type: Number, // Account holder name should not be empty
        trim: true,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields


Store.create = async (userId,data)=>{
    const result = await db.connectDb("Store", StoreSchema);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
}

Store.get = async(userId)=>{
    const result = await db.connectDb("Store", StoreSchema);
    console.log(">>>>>>>",userId);
    let storeData = await result.find({userId: userId});
    console.log(">>>>>>>>",storeData);
    if(storeData.length <= 0){
        return false;
    }
    console.log(storeData);
    return storeData;
}




const dateSchema = new mongoose.Schema({
    userId: { 
        type: String,  // Ensure every bank record is linked to a user
    },
    date: {
        type: Date,// PAN is usually mandatory
        unique: true,   // Ensure PAN is unique in the database
        trim: true,     // Remove extra whitespace
    },
    Quantity: {
        type: Number,
        // Account holder name should not be empty
        trim: true,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields






const MarketSchema = new mongoose.Schema({
    userId: { 
        type: String, 
         // Ensure every bank record is linked to a user
    },
    Market: {
        type: String, // PAN is usually mandatory
        unique: true,   // Ensure PAN is unique in the database
        trim: true,     // Remove extra whitespace
    },
    Quantity: {
        type: Number, // Account holder name should not be empty
        trim: true,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

Market ={}

Market.create = async (userId,data)=>{
    const result = await db.connectDb("Market", MarketSchema);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
}

Market.getData = async(userId)=>{
    const result = await db.connectDb("Market", MarketSchema);
    console.log(">>>>>>>",userId);
    let Data = await result.find({userId: userId});
    console.log(">>>>>>>>",Data);
    if(Data.length <= 0){
        return false;
    }
    console.log(Data);
    return Data;
}


const salesYoutube ={}

const salesSchemaYoutube = new mongoose.Schema({
    saleStartDate: { type: Date,  },
    saleEndDate: { type: Date,  },
    youtubeVideoID: { type: String,  },
    youtubeVideoTitle: { type: String,  },
    youtubeAssetID: { type: String,  },
    youtubeAssetTitle: { type: String,  },
    youtubeAssetISRC: { type: String,  },
    youtubeAssetArtists: { type: String,  },
    youtubeChannelID: { type: String,  },
    youtubeChannelDisplayName: { type: String,  },
    fugaAssetID: { type: String,  },
    quantity: { type: Number,  },
    territory: { type: String,  },
    earningsType: { type: String,  },
    service: { type: String,  },
    convertedGrossIncome: { type: Number,  },
    contractDealTerm: { type: String,  },
    reportedRoyalty: { type: Number,  },
    currency: { type: String,  },
    youtubeAssetType: { type: String,  },
    youtubeClaimType: { type: String,  }
  }, {
    timestamps: true // Optionally add createdAt and updatedAt timestamps
  });


  salesYoutube.create =  async (userId,data) =>{
    const result =  db.connectDb("SalesYoutube", salesSchemaYoutube);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
    }

    salesYoutube.getData = async(userId)=>{
        const result = await db.connectDb("SalesYoutube", salesSchemaYoutube);
        console.log(">>>>>>>",userId);
        let Data = await result.find({userId: userId});
        console.log(">>>>>>>>",Data);
        if(Data.length <= 0){
            return false;
        }
        console.log(Data);
        return Data;
    }

const salesAssets ={};
const salesSchemaAssets = new mongoose.Schema({
    saleStartDate: { type: Date, required: true },
    saleEndDate: { type: Date, required: true },
    dsp: { type: String, required: true },
    saleStoreName: { type: String, required: true },
    saleType: { type: String, required: true },
    saleUserType: { type: String, required: true },
    territory: { type: String, required: true },
    productUPC: { type: String, required: true },
    productReference: { type: String, required: true },
    productCatalogNumber: { type: String, required: true },
    productLabel: { type: String, required: true },
    productArtist: { type: String, required: true },
    productTitle: { type: String, required: true },
    assetArtist: { type: String, required: true },
    assetTitle: { type: String, required: true },
    assetVersion: { type: String, required: true },
    assetDuration: { type: Number, required: true }, // Duration in seconds or minutes
    assetISRC: { type: String, required: true },
    assetReference: { type: String, required: true },
    assetProduct: { type: String, required: true }, // Asset/Product field
    productQuantity: { type: Number, required: true },
    assetQuantity: { type: Number, required: true },
    originalGrossIncome: { type: Number, required: true },
    originalCurrency: { type: String, required: true },
    exchangeRate: { type: Number, required: true },
    convertedGrossIncome: { type: Number, required: true },
    contractDealTerm: { type: String, required: true },
    reportedRoyalty: { type: Number, required: true },
    currency: { type: String, required: true },
    reportRunID: { type: String, required: true },
    reportID: { type: String, required: true },
    saleID: { type: String, required: true },
    audioFormat: { type: String, required: true }
  }, {
    timestamps: true // Automatically add createdAt and updatedAt fields
  });

  salesAssets.create = async (userId)=>{
    const result =  db.connectDb("SalesAssets", salesSchemaAssets);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
  }
  salesAssets.getData = async(userId)=>{
    const result = await db.connectDb("SalesYoutube", salesSchemaYoutube);
    console.log(">>>>>>>",userId);
    let Data = await result.find({userId: userId});
    console.log(">>>>>>>>",Data);
    if(Data.length <= 0){
        return false;
    }
    console.log(Data);
    return Data;
}

const stream={};

  const dataStream = new mongoose.Schema({
    dsp: { 
      type: String, 
      required: true, // Distribution Service Provider (e.g., Spotify, Apple Music)
    },
    amountDue: { 
      type: Number, 
      required: true, // Amount due for royalties or sales
    },
    downloads: { 
      type: Number, 
      required: true, // Number of downloads
    },
    streams: { 
      type: Number, 
      required: true, // Number of streams
    },
  }, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
  });

  stream.create = async (userId) =>{
    const result =  db.connectDb("SalesAssets", salesSchemaAssets);
    data["userId"] = userId;
    let insData = await result.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        return false
    }
  }
  
  stream.getData = async (userId) =>
  {
    const result = await db.connectDb("SalesYoutube", salesSchemaYoutube);
    console.log(">>>>>>>",userId);
    let Data = await result.find({userId: userId});
    console.log(">>>>>>>>",Data);
    if(Data.length <= 0){
        return false;
    }
    console.log(Data);
    return Data;
  }


  module.exports={
    Track,
    Store,
    Market,
    salesYoutube
  } 