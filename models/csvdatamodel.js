
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
        type: String, // PAN is usually mandator   // Ensure PAN is unique in the database
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
        type: String, // PAN is usually mandatory  // Ensure PAN is unique in the database
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
    userId: {
        type: String, 
         // Ensure every bank record is linked to a user
    },
    SaleStartdate: {
        type: Date,
       
      },
      SaleEnddate: {
        type: Date,
       
      },
      YouTubeVideoID: {
        type: String,
       
      },
      YouTubeVideoTitle: {
        type: String,
       
      },
      YouTubeAssetID: {
        type: String,
       
      },
      YouTubeAssetTitle: {
        type: String,
       
      },
      YouTubeAssetISRC: {
        type: String,
       
      },
      YouTubeAssetArtists: {
        type: String,
       
      },
      YouTubeChannelID: {
        type: String,
       
      },
      YouTubeChannelDisplayName: {
        type: String,
       
      },
      FUGAAssetID: {
        type: String,
       
      },
      Quantity: {
        type: Number,
       
      },
      Territory: {
        type: String,
       
      },
      EarningsType: {
        type: String,
       
      },
      Service: {
        type: String,
       
      },
      ConvertedGrossIncome: {
        type: mongoose.Decimal128,  // Use Decimal128 for more precision with decimals
       
      },
      Contractdealterm: {
        type: String,
       
      },
      ReportedRoyalty: {
        type: mongoose.Decimal128,  // Use Decimal128 for royalty amounts
       
      },
      Currency: {
        type: String,
       
      },
      YouTubeAssetType: {
        type: String,
       
      },
      YouTubeClaimType: {
        type: String,
       
      }
    }, {
      timestamps: true,  // Optional: to automatically add createdAt and updatedAt fields
    });


  const salesModel = mongoose.model("SalesYoutube",salesSchemaYoutube)

    salesYoutube.create =  async (userId,data) =>{
    const result =  db.connectDb("SalesYoutube", salesSchemaYoutube);
    data["userId"] = userId;

    console.log(">>>>>>>>>>>>>>>>>>>>",data);

    let data1 = new salesModel(data);
    let insData = await data1.save();
    console.log(data1);
    if (insData) {
        return insData;
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
    userId:{
      type: String, // Ensure every bank record is linked to a user
    },
    SaleStartdate: {
      type: Date,
    },
    SaleEnddate: {
      type: Date,
    },
    DSP: {
      type: String,
    },
    SaleStoreName: {
      type: String,
    },
    SaleType: {
      type: String,
    },
    SaleUserType: {
      type: String,
    },
    Territory: {
      type: String,
    },
    ProductUPC: {
      type: String,
    },
    ProductReference: {
      type: String,
    },
    ProductCatalogNumber: {
      type: String,
    },
    ProductLabel: {
      type: String,
    },
    ProductArtist: {
      type: String,
    },
    ProductTitle: {
      type: String,
    },
    AssetArtist: {
      type: String,
    },
    AssetTitle: {
      type: String,
    },
    AssetVersion: {
      type: String,
      default: '',
    },
    AssetDuration: {
      type: String,
    },
    AssetISRC: {
      type: String,
    },
    AssetReference: {
      type: String,
    },
    AssetProduct: {
      type: String,
    },
    ProductQuantity: {
      type: String,
      default: '',  // Assuming empty strings are allowed
    },
    AssetQuantity: {
      type: String,
    },
    OriginalGrossIncome: {
      type: mongoose.Decimal128,  // For precision with financial values
    },
    Originalcurrency: {
      type: String,
    },
    ExchangeRate: {
      type: String,  // This could be a float or string based on how it's used
    },
    ConvertedGrossIncome: {
      type: mongoose.Decimal128,  // For precision with financial values
    },
    Contractdealterm: {
      type: String,
    },
    ReportedRoyalty: {
      type: mongoose.Decimal128,  // For precision with financial values
    },
    Currency: {
      type: String,
    },
    ReportRunID: {
      type: String,
    },
    ReportID: {
      type: String,
    },
    SaleID: {
      type: String,
    },
    AudioFormat: {
      type: String,
      default: '',  // Assuming empty string is allowed for this field
    }
  }, {
    timestamps: true,  // Optional: to automatically add createdAt and updatedAt fields
  });

const AssetModel = mongoose.model('SalesAssets',salesSchemaAssets)

  salesAssets.create = async (userId,data)=>{
    const result =  db.connectDb("SalesAssets", salesSchemaAssets);
    data["userId"] = userId;
    const data1 = new AssetModel(data);
   const insData = await data1.save();
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];  
    } else {
        return false
    }
  }
  salesAssets.getData = async(userId)=>{
    const result =  db.connectDb("SalesAssets", salesSchemaAssets);
    console.log(">>>>>>>",userId);
    let Data = await AssetModel.find({userId: userId});
    console.log(">>>>>>>>",Data);
    if(Data.length <= 0){
        return false;
    }
    console.log(Data);
    return Data;
}

const stream={};

  const dataStream = new mongoose.Schema({
    userId:{
        type: String   },
    dsp: { 
      type: String,  // Distribution Service Provider (e.g., Spotify, Apple Music)
    },
    amountDue: { 
      type: Number,  // Amount due for royalties or sales
    },
    downloads: { 
      type: Number,  // Number of downloads
    },
    streams: { 
      type: Number,  // Number of streams
    },
  }, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
  });

  const dataModel = mongoose.model("stream", dataStream)

  stream.create = async (userId,data) =>{
    const result =  db.connectDb("stream", dataStream);
    data["userId"] = userId;
    console.log(">>>>>>",data);
    const data1 =new dataModel(data);
    await data1.save();
    
    console.log(data1);
    if (data1.length > 0) {
        return data1[0];
    } else {
        return false
    }
  }
  
  stream.getData = async (userId) =>
  {
    const result = await db.connectDb("stream", dataStream);
    console.log(">>>>>>>",userId);
    let Data = await dataModel.find({userId: userId});
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
    salesYoutube,
    salesAssets,
    stream
  } 