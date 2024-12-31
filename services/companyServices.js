const walletModel = require('../models/withdrawalmodel');
const transcationModel = require('../models/transaction');
const bcrypt = require("../utils/bcrypt")
const jwt = require("jsonwebtoken");
const R = require("../utils/responseHelper");
const validateInput = require("../helper/emailmobileVal")
const sendOtpEmail = require("../utils/Sendgrid")
const IP = require('ip');
// const companyModel = require("../models/companymodels");
const authModel = require("../models/authmodels");
const auth = {};
auth.addCompany = async (req, res, next) => {
    const { email, phone, name, password, role, noOfLabel,panNo,aadharNo } = req.body
    // console.log("newUsernewUsernewUsernewUser",req.body.email)

    const now = new Date();
    const futureDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const futureTimeInMillis = futureDate.getTime()
    const ipAddress = IP.address();
    try {
        let isUserExist = await authModel.checkAvailablity(email)
        if (isUserExist?.length > 0) {
            return R(res, false, "Email Id already exists!!", {}, 406)
        }
        const newUser = {
            email: email,
            name: name,
            phone: phone,
            password: await bcrypt.passwordEncryption(password),
            noOfLabel:noOfLabel,
            panNo:panNo,
            aadharNo:aadharNo,
            role: role,
            is_deleted: 0,
            ip_address: ipAddress,
            create_at: futureTimeInMillis,
            is_active: 1,
            clientNumber:new Date().getTime()
        }
    
        const register = await authModel.addCompany(newUser)
         
        return R(res, true, "Master Account Added Successfully!!", register, 200) 
    } catch (err) {
        next(err)
    }
};


// auth.getUsers = async (req, res, next) => {

//     try {
//         const get = await authModel.getUser(req.doc.userId)
//         if (!get) {
//             return R(res, false, "No data found!!", {}, 200)
//         }
//         return R(res, true, "Data successfully!!", get, 200)
//     } catch (error) {
//         next(error)
//     }
// };
// auth.passwordChange = async (req, res, next) => {
//     const { newPassword, oldPassword } = req.body

//     try {
//         const result = await authModel.changePassword(req.doc.userId, oldPassword, newPassword);
//         if (!result) {
//             return R(res, false, "old password is not correct", "", 400)
//         }

//         return R(res, true, "Update successfully!!", req.doc.userId, 200)
//     } catch (error) {
//         next(error)
//     }
// };
// auth.profileUpdate = async (req, res, next) => {
//     try {
//         const id = req.doc.userId;
//         if (!id) {
//             return R(res, false, "ID is required", {}, 400);
//         }

//         let data = req.body;
//         console.log(data);
//         if (!data) {
//             return R(res, false, "Data is required", {}, 400);
//         }

//         const profileData = authModel.updateProfile(id, data);

//         return R(res, true, "Profile updated successfully", profileData, 201);
//     } catch (error) {
//         next(error);
//     }
// }

// auth.is_deleted = async (req, res, next) => {
//     try {
//         const { userId } = req.body;

//         if (!userId) {
//             return R(res, false, "User ID is required", "", 400)
//         }

//         const update = await authModel.is_deleted(userId);

//         if (!update) {
//             return R(res, false, "User not found", "", 404)
//         }

//         return R(res, true, "User deleted successfully", "", 200)

//     } catch (error) {
//         next(error)
//     }
// }

// auth.userList = async (req, res, next) => { 
//     try {
//         const get = await authModel.userList()
//         if (!get) {
//             return R(res, false, "No data found!!", [], 200)
//         }
//         return R(res, true, "Data successfully!!", get, 200)
//     } catch (error) {
//         next(error)
//     }
// };

module.exports = auth;



