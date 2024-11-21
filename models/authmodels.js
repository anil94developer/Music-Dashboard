const db = require("../utils/dbConn");
const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");   
const auth = require("../services/authServices");
let ObjectId = require("mongodb").ObjectID;

authModel={} 

 
const usersSchema = mongoose.Schema({
    name: { type: String }, 
    email: { type: String, required: true },
    phone: { type: Number, required: true }, 
    dob: { type: String },
    role:{type:String},
    password: { type: String, required: true },
    is_deleted:{type:Number},
    ip_address:{type:String},
    is_active:{type:Number},
    companyName: { type: String },
    clientNumber: { type: String },
    mainEmailAddress: { type: String },
    royaltiesEmailAddress: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    postalAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    defaultTimeZone: { type: String },
    defaultLanguage: { type: String }
},
{ timestamps: true }
);


authModel.cronForOneHour = async() => {
    const nowInMillis = Date.now();

    const check = await db.connectDb("users",usersSchema)
    const resultForCurrentAffairs = await check.updateMany(
      { is_subscribed_for_current_affairs:true, subscription_end_for_current_affairs: { $lt: nowInMillis } }, // Replace 'subscriptionDate' with your date field
      { $set: { is_subscribed_for_current_affairs: false,days_for_current_affairs:0 } }
    );
    const resultForTestSeries = await check.updateMany(
        { is_subscribed_for_test_series:true, subscription_end_for_test_series: { $lt: nowInMillis } }, // Replace 'subscriptionDate' with your date field
        { $set: { is_subscribed_for_test_series: false,days_for_test_series:0 } }
      );
}
authModel.cronForOneDay = async() => {
    const check = await db.connectDb("users",usersSchema)
    const resultForCurrentAffairs = await check.updateMany(
        { is_subscribed_for_current_affairs: true,days_for_current_affairs: { $gt: 0 } },
        { $inc: { days_for_current_affairs: -1 } }
      );
      const resultForTestSeries = await check.updateMany(
        { is_subscribed_for_test_series: true,days_for_test_series: { $gt: 0 } },
        { $inc: { days_for_test_series: -1 } }
      );
}
authModel.login = async (key, email) => {
    
    let check = {};
    check[key] = email; 
    const result = await db.connectDb("users", usersSchema);
    let val = await result.findOne(check, { __v: 0 });  
    if (!val) {  
        return false  
    } 
    return val;
};
authModel.signUp = async (data) => {
    const Login = await db.connectDb("users", usersSchema);
    let insData = await Login.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
       return false 
    }
};
authModel.getUser = async(userId)=> {
    const add = await db.connectDb("users",usersSchema)
    const getUser = await add.find({_id:userId})
    return getUser[0]
} 
authModel.changePassword = async (userId, oldpass, pass) => {
    try {
        // Connect to the database
        const Login = await db.connectDb("users", usersSchema);

        // Fetch the user by their ID
        const user = await Login.findOne({ _id: userId });
        console.log("Fetched User:", user);

        // If user is not found, return false
        if (!user) {
            return false;
        }

        // Compare the old password with the stored one
        const isOldPassValid = await bcrypt.compare(oldpass, user.password);
        console.log("Is Old Password Valid:", isOldPassValid);

        // If the old password is invalid, return false
        if (!isOldPassValid) {
            return false;
        }

        // Update the password with the new one
        const hashedPassword = await bcrypt.hash(pass, 10);
        console.log("Hashed New Password:", hashedPassword);

        const passData = await Login.updateOne(
            { _id: userId },
            { $set: { password: hashedPassword } },
            { runValidators: true }
        );

        console.log("Password Update Result:", passData);

        // Return true if password was updated, else false
        return passData.modifiedCount > 0;
    } catch (error) {
        console.error("Error changing password:", error);
        return false;
    }
};


authModel.updateProfile=async (id,data)=>{
   try{ const result = await db.connectDb("users", usersSchema);
    let updateData = await result.updateOne(
        { _id: id },
        { $set: data },
        { runValidators: true }
    );
  return updateData;}
  catch(err){ 
    console.error("Error updating profile:", err);
    return false;
}
}



// authModel.findAdminByRole = async(email, password) => {
//     let findadmin = await db.connectDb("usersSchemas",usersSchema)
//     let val = await findadmin.findOne(
//         { role: "admin" },
//         { __v: 0 }
//     );
//     console.log("findfindfind======>>>",val)
//     if(Object.keys(val).length>0){
//         return val
//     }
//     else{
//         return false
//     }
// }

// authModel.findAdmin = async(email, password) => {
//     let findadmin = await db.connectDb("usersSchemas",usersSchema)
//     let val = await findadmin.findOne(
//         { email: email },
//         { __v: 0 }
//     );
//     console.log("findfindfind======>>>",val)
//     if(Object.keys(val).length>0){
//         return val
//     }
//     else{
//         return false
//     }
// }


// authModel.getUserByMobileOrEmail = async()=> {
//     const add = await db.connectDb("users",usersSchema)
//     const getUser = await add.find({})
//     return getUser
// }

// authModel.changeStatus = async(data) => {
//     try{
//         let userstatus = await db.connectDb("users",usersSchema)
//         let statusCategory = await userstatus.updateOne({_id:data.id},{$set:{is_active:data.isActive}})
//         if (statusCategory) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     catch(err){
//         return err
//     }
// }

// authModel.changeDeleteStatus = async(data) => {
//     try{
//         let userstatus = await db.connectDb("users",usersSchema)
//         let statusCategory = await userstatus.updateOne({_id:data.id},{$set:{is_deleted:data.isDelete}})
//         if (statusCategory) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     catch(err){
//         return err
//     }
// }

// authModel.findPermission = async(userId) => {
//     let connect = await db.connectDb("usersSchemas",usersSchema)
//     let find = await connect.findOne({_id:userId})
//     if(Object.keys(find).length>0){
//         return find
//     }
//     else{
//         return false
//     }
// }


// authModel.checkAvailablityWithUserId = async(user_id)=>{
//     const checkUser = await db.connectDb("users", usersSchema);
//     let val = await checkUser.findOne({_id:user_id})
//       return val
// }

// authModel.checkAvailablity = async(email)=>{
//     const checkUser = await db.connectDb("users", usersSchema);
//     let val = await checkUser.find({
//         $or: [
//           { email: email }
//         ]
//       })
//       return val
// }
// authModel.checkAvailablityForAdmin = async(email)=>{
//     const checkUser = await db.connectDb("usersSchemas",usersSchema)
//     let val = await checkUser.find({ email: email })
//       return val
// }

// authModel.checkAvailablityWithoutASpecificUser = async(userId,email,mobile)=>{
//     const checkUser = await db.connectDb("users", usersSchema);
//     let val = await checkUser.find({
//         $and: [
//             { _id: { $ne: userId } },
//             { $or: [{ email: email }, { mobileNumber: mobile }] }
         
//         ]
//       })
//       return val
// }


// authModel.profileupdate = async (id,data) => {
//     const Login = await db.connectDb("users", usersSchema);
//     let insData = await Login.updateOne({_id:id},{$set:data});
//     if (insData.modifiedCount > 0 || insData.upsertedCount > 0) {
//         return true;
//     } else {
//         return false
//         // return apiResponse.err("Registration Failed", 403);
//     }
// };
// authModel.showprofile = async (id) => {
//     try{
//     const user = await db.connectDb("users", usersSchema);
//     let insData = await user.findOne({_id:id});
//         return insData
//     }catch(error){
//         // return R(res, false, "Error occurs", {},403)
//         console.log(error)
//     }
// };
// authModel.updateemailandmobile = async (id,data) => {
//     console.log('changestatus=======>>>>>>>>',id,data);
//     const Login = await db.connectDb("users", usersSchema);
//     let insData = await Login.updateOne({_id:id},{$set:{email:data.email,mobileNumber:data.mobileNumber}});
//     if (insData.modifiedCount > 0 || insData.upsertedCount > 0) {
//         return true;
//     } else {
//         return false
//         // return apiResponse.err("Registration Failed", 403);
//     }
// };

// authModel.usersSchema = async (data) => {
//     const sub = await db.connectDb("usersSchemas", usersSchema);
//     let insData = await sub.create(data);
//     console.log(insData)
//     if (insData || insData.length > 0) {
//         return insData;
//     } else {
//         return apiResponse.err("Registration Failed", 403);
//     }
// };
// authModel.findusersSchema = async (email) => {
//     const sub = await db.connectDb("usersSchema", usersSchema);
//     let val = await sub.findOne(
//         { email: email },
//         { __v: 0 }
//     );
//     // console.log(val);
//     if (val) {
//         console.log("resolve");
//         return val;
//     }
// }
// authModel.findusersSchemalist = async (type) => {
//     const sub = await db.connectDb("usersSchemas", usersSchema);
//     let val = await sub.find({
//         $and: [
//             { email: { $ne: "admin@gmail.com" } }, // Condition 1: email not equal to 'admin@gmail.com'
//             { role: type } // Condition 2: role equals a certain value stored in the variable 'type'
//         ]
//     });
    
//     if (val.length>0) {
//         return val;
//     }
//     else{
//         return false
//     }
// }
// authModel.setusersSchema = async (data) => {
//     const login = await db.connectDb("usersSchema", usersSchema);
//     const insdata = await login.updateOne(
//         { _id: ObjectId(data._id) },
//         {
//             $set:data
//         },
//         { upsert: true, runValidators: true }
//     );

//     if (insdata.modifiedCount > 0 || insdata.upsertedCount > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };
// authModel.userstatus = async (_id, status) => {
//     const login = await db.connectDb("usersSchema", usersSchema);
//     const insdata = await login.updateOne(
//         { _id: ObjectId(_id) },
//         { $set: { active: status }},
//         { upsert: true, runValidators: true }
//     );

//     if (insdata.modifiedCount > 0 || insdata.upsertedCount > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// authModel.userdelete = async (_id) => {
//     const Login = await db.connectDb("usersSchema", usersSchema);
//     const getId = await Login.findByIdAndDelete(_id);
//     // console.log('mob', getId, val, pro)
//     if (getId) {
//         return getId;
//     } else {
//         return apiResponse.err("User not Found!!", 403);
//     }
// };



// authModel.forgotPassword = async (email, pass) => {
//     const Login = await db.connectDb("users", usersSchema);
//     const passData = await Login.updateOne(
//         { email: email },
//         { $set: { password: pass } },
//         { runValidators: true }
//     );
//     if (passData.modifiedCount > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// authModel.forgotPasswordForAdmin = async (email, pass) => {
//     const dbConnect = await db.connectDb("usersSchemas",usersSchema)
//     const passData = await dbConnect.updateOne(
//         { email: email },
//         { $set: { password: pass } },
//         { runValidators: true }
//     );
//     if (passData.modifiedCount > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// authModel.getUserbyId = async (userId) => {
//     const Login = await db.connectDb("users", usersSchema);
//     let val = await Login.findOne({ _id: ObjectId(userId) }, { __v: 0 });
//     if (val) {
//         console.log("resolve");
//         console.log('val: ', val);
//         return val;
//     }
// };

module.exports = authModel