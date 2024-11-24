const db = require("../utils/dbConn");
const mongoose = require("mongoose");

const withdrawalSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    amount:{
        type:Number,
        default:0
    },
    remark:{
      type:String,
      default:""
    },
    status:{
        type:String,
        enum:["active", "pending", "complete"]
    }
}, { timestamps: true })

const withdrawalModel = mongoose.model("withdrawal", withdrawalSchema);


withdrawalModel.add = async (data) =>{
    const result = await db.connectDb("withdrawal", withdrawalSchema);
 try{
    const newWithdrawal = new withdrawalModel(data);
    await newWithdrawal.save();
    return newWithdrawal;
 }catch(e){
     console.log(e);
     return false;
}
}


module.exports = withdrawalModel;
