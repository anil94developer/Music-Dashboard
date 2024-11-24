const db = require("../utils/dbConn");
const mongoose = require("mongoose");

trans={}

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
trans.add = async (data) => {
    const result = await db.connectDb("transactions", transcationSchema); // Ensure proper connection
    
    try {
        const transaction = new transcationModel(data); // Create a new transaction instance
        const savedTransaction = await transaction.save(); // Save the transaction to the database
        console.log("Transaction successfully saved:", savedTransaction);
        return savedTransaction; // Return the saved transaction
    } catch (error) {
        console.error("Error saving transaction:", error.message);
        return false; // Return false on error
    }
};


module.exports = trans;
