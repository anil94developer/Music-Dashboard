const mongoose = require("mongoose");
const db = require("../utils/dbConn");
const {ObjectId}=require("mongodb")
const submenuSchema = new mongoose.Schema({
    subMenuName: { type: String, required: true },
    status: { type: Boolean, default: false },
    submenu: [this], // Recursive structure for nested submenus
});

const menuPermissionSchema = new mongoose.Schema({
    mainMenuName: { type: String, required: true },
    status: { type: Boolean, default: false },
    submenu: [submenuSchema], // Array of submenus
});

const listSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
});

const otherPermissionSchema = new mongoose.Schema({
    sectionName: { type: String, required: true },
    status: { type: Boolean, default: false },
    list: [listSchema], // Array of list items
});

const userPermissionSchema = new mongoose.Schema({   
    userId: {  
        type:mongoose.Schema.Types.ObjectId,
        ref:"user", 
        required: true 
    },
    registeredUserId:{type:mongoose.Schema.Types.ObjectId,
        ref:"user", 
        required: true },
    menuPermission: [menuPermissionSchema], // Array of menu permissions
    otherPermission: [otherPermissionSchema], // Array of other permissions
});

const permissionModel =mongoose.model("UserPermission", userPermissionSchema);
permission={};

permission. addPermission = async (userId,registeredUserId,data) => {
    const result = await db.connectDb("UserPermission", userPermissionSchema);
    try{
        const val={
            userId: userId,
            registeredUserId:registeredUserId,
            menuPermission: data.menuPermission,
            otherPermission: data.otherPermission,
        };

      const user = new permissionModel(val);
      await user.save();
return user;
    }catch(err){
        console.log("Error connecting to DB", err);
        return false;
    }
}



permission.listPermissions=async (userId)=>{
    const result = await db.connectDb("UserPermission", userPermissionSchema);
    try{
        const user = await permissionModel.find({userId:userId});
        if(!user){
            return false;
        }
        return user;
    }catch(err){
        console.log("Error connecting to DB", err);
        return false;
    }
}



permission.profilePermissions=async (userId)=>{
    console.log(userId);
    const result = await db.connectDb("UserPermission", userPermissionSchema);
    try{
        
        const user = await permissionModel.findOne({registeredUserId:new ObjectId(userId)});
        console.log(user);
        if(!user){
            return false;
        }
        const userData=await authModel.getUser(userId);
        if(!userData){
            return false;
        }
        console.log("User>>>>>", userData);
        user["userdetails"]=userData;

        const data ={
            userId:user.userId,
            menuPermission:user.menuPermission,
            otherPermission:user.otherPermission,
            userdetails:userData,
        }
        return data;
    }catch(err){
        console.log("Error connecting to DB", err);
        return false;
    }
}

module.exports = permission

