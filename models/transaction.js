const db = require("../utils/dbConn");
const mongoose = require("mongoose");

const transcationSchema=mongoose.Schema({
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
    },
    creditAmount:{
        type:Number,
        default:0
    },
    debitAmount:{
        type:Number,
        default:0
    }

}, { timestamps: true })

const transcationModel = mongoose.model("transcation", transcationSchema);

module.exports = transcationModel;
