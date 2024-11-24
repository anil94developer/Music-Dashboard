const db = require("../utils/dbConn");
const mongoose = require("mongoose");

trans={}

const transcationSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
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

trans.list = async (userId) => {
    const result = await db.connectDb("transactions", transcationSchema); 

    try {
        const transactions = await transcationModel.find({ userId:userId }); // Retrieve all transactions for the given user
        console.log("Transactions retrieved successfully:", transactions);
        return transactions; // Return the retrieved transactions
    } catch (error) {
        console.error("Error retrieving transactions:", error.message);
        return false; // Return false on error
    }
};

trans.profile = async (userId) => {
    // Connect to the "transactions" collection with the transaction schema
    const result = await db.connectDb("transactions", transcationSchema);

    try {
        // Validate the userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return false;
        }

        // Retrieve the user's transaction profile with populated user details
        const userProfile = await transcationModel
            .findOne({ userId: userId});

        // Check if a user profile was found
        if (!userProfile) {
            console.log(`No transaction profile found for userId: ${userId}`);
            return null;
        }

        const userData= await authModel.getUser(userId);

        if(!userData) {
            console.log(`No user found for userId: ${userId}`);
            return false;
        }

console.log(`User profile`, userData);
        userProfile.userId=userData;
        

        console.log("User profile retrieved successfully:", userProfile);
        return userProfile; // Return the retrieved user profile with user details
    } catch (error) {
        console.error("Error retrieving user profile:", error.message);
        return false;
    }
};


module.exports = trans;
