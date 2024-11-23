const walletModel=require('../models/withdrawalmodel');
const transcationModel=require('../models/transaction');
const bcrypt = require("../utils/bcrypt")
const jwt = require("jsonwebtoken");
const R = require("../utils/responseHelper");
const validateInput = require("../helper/emailmobileVal")
const sendOtpEmail = require("../utils/Sendgrid")
const IP = require('ip');
const authModel = require("../models/authmodels");

 

// auth.addUsers = async (req, res, next) => {
//     try {
//         let userAddition = await authModel.addUser()
//         return R(res, true, "Data submitted successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }

// }

// auth.changeActiveStatus = async (req, res, next) => {
//     try {
//         let add = await authModal.changeStatus(req.body)
//         return R(res, true, "Status updated successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }

// }

// auth.changeUserDeleteStatus = async (req, res, next) => {
//     try {
//         let add = await authModal.changeDeleteStatus(req.body)
//         return R(res, true, "Status updated successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }

// }


// auth.getProfile = async (req, res, next) => {
//     try {
//         console.log("useriseruseruser", req.doc)
//         let get = await authModel.showprofile(req.doc.userId)
//         return R(res, true, "Profile found successfully", get, 200)
//     } catch (error) {
//         next(error)
//     }
// }
// auth.verifyOtp = async (req, res, next) => {
//     try {
//         const { otpkey, otp } = req.body
//         const check = validateInput(otpkey)
//         console.log("getusergetuser", check, otpkey)
//         let getUser = await authModel.login(check, otpkey);
//         if (getUser.otp == otp) {
//             getUser.otp = "";
//             await getUser.save()
//             return R(res, true, `OTP matched successfully!`, {}, 200)
//         }
//         else {
//             return R(res, false, `OTP doesn't matched!`, {}, 200)
//         }
//     } catch (error) {
//         next(error)
//     }

// }

// auth.getOtpForMobileAndEmail = async (req, res, next) => {
//     try {
//         const { otpkey } = req.body
//         const check = validateInput(otpkey)
//         if (check == "invalid") {
//             return R(res, false, `Invalid input!`, {}, 200)
//         }
//         let getUser = await authModel.login(check, otpkey);
//         console.log("getusergetuser", Object.values(getUser).length)

//         if (Object.values(getUser).length > 0) {
//             const generateOtp = () => {
//                 return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
//             };

//             if (check == "emailId") {
//                 const otp = generateOtp();
//                 getUser.otp = otp;
//                 getUser.save()
//                 const sendmail = await sendOtpEmail(otpkey, otp, res);
//                 if (sendmail) {
//                     return R(res, true, `OTP sent successfully! Please check your mail`, {}, 200)
//                 }
//                 else {
//                     return R(res, false, `Error while sending otp`, {}, 501)
//                 }
//             }
//             else {
//                 const otp = generateOtp();
//                 getUser.otp = otp;
//                 getUser.save()
//                 return R(res, true, `OTP sent successfully! ${otp}`, otp, 200)
//             }

//         }
//         return R(res, false, "User not found", {}, 200)
//     } catch (error) {
//         next(error)
//     }


// }

const auth={};

auth.login = async (req, res, next) => {
    try {
        let { email, password } = req.body
        const ipAddress = IP.address();
        console.log(ipAddress)
        let val = await authModel.login("email", email);
        if (Object.values(val).length > 0 && !val?.is_active) {
            return R(res, false, "User not active! contact to admin!! ", {}, 200)
        }
        if (Object.values(val).length > 0 && val?.is_deleted) {
            return R(res, false, "User Deleted!", {}, 200)
        }

        if (val) {
            const compare = await bcrypt.passwordComparision(
                password,
                val.password
            );
            if (compare) {
                const userData = {
                    userId: val._id,
                    email: val.email,

                };

                const secret = process.env.JWT_SECRET;
                userData.token = jwt.sign(userData, secret);
                userData.profile = val
                return R(res, true, "Login Successfully", userData, 200)
            } else {
                return R(res, false, "Password not matched", {}, 403)
            }
        } else {
            return R(res, false, "Email not Register", {}, 403)
        }

    } catch (error) {
        next(error)
    }

};
auth.signUp = async (req, res, next) => {
    const { email, phone, name, password, role, dob } = req.body
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
            dob: dob,
            role: role,
            is_deleted: 0,
            ip_address: ipAddress,
            create_at: futureTimeInMillis,
            is_active: 1
        }
        const register = await authModel.signUp(newUser)
        const userData = {
            email: email,
            name: name,
            phone: phone,
            userId: register._id
        };

        const secret = process.env.JWT_SECRET;
        userData.token = jwt.sign(userData, secret);

        return R(res, true, "Account Registered Successfully!!", userData, 200)



    } catch (err) {
        next(err)
    }
};
auth.getUsers = async (req, res, next) => { 
 
    try {
        const get = await authModel.getUser(req.doc.userId)
        return R(res, true, "Data successfully!!", get, 200)
    } catch (error) {
        next(error)
    }
};
auth.passwordChange= async (req, res, next) => { 
      const {newPassword,oldPassword}=req.body
   
    try {
        const result = await authModel.changePassword(req.doc.userId,oldPassword,newPassword);
              if(!result){
            return R(res,false,"old password is not correct","",400)
        }

        return R(res, true, "Update successfully!!", req.doc.userId, 200)
    } catch (error) {
        next(error)
    }
};
auth.profileUpdate=async(req,res,next) => {
    try {
        const id = req.doc.userId;
        if (!id) {
          return R(res, false, "ID is required", {}, 400);
        } 

        let data=req.body;
        console.log(data);
        if (!data) {
          return R(res, false, "Data is required", {}, 400);
        }
        
        const profileData=authModel.updateProfile(id,data);
        
        return R(res, true,"Profile updated successfully",profileData,201);
    } catch (error) {
        next(error);
    }
}   

// auth.addsubadmin = async (req, res, next) => {
//     try {
//         req.body.password = await bcrypt.passwordEncryption(req.body.password);
//         let findSubadmin = await authModel.findsubadmin(req.body.email)
//         if (findSubadmin) {
//             return R(res, false, "Email Id Already Exists Please choose different email Id!!!", {}, 200)
//         }
//         let ins = await authModel.subadmin(req.body);
//         return R(res, true, "Data submitted successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }

// };
// auth.getsubadmins = async (req, res, next) => {
//     try {
//         let get = await authModel.findsubadminlist(req.body.type)
//         return R(res, true, "Data found successfully!!", get, 200)
//     } catch (error) {
//         next(error)
//     }
// }
// auth.setsudadmin = async (req, res, next) => {
//     req.body.password = await bcrypt.passwordEncryption(req.body.password);
//     try {
//         let usersatuts = await authModel.setsubadmin(req.body);
//         return R(res, true, "Data updated successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }

// }
// auth.subadminstatus = async (req, res, next) => {
//     const { id, status } = req.body
//     try {
//         let usersatuts = await authModel.userstatus(id, status);
//         return R(res, true, "Status updated successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }
// };
// auth.deletesubuser = async (req, res, next) => {
//     const { id } = req.body
//     try {
//         let usersatuts = await authModel.userdelete(id);
//         return R(res, true, "Data removed successfully!!", {}, 200)
//     } catch (error) {
//         next(error)
//     }
// };

// auth.forgotPassword = async (req, res, next) => {
//     try {
//         const { password, cpassword, otpkey } = req.body
//         const check = validateInput(otpkey)
//         console.log("getusergetuser", check, otpkey)
//         if (check == "invalid") {
//             return R(res, false, `Invalid input!`, {}, 200)
//         }
//         let getUser = await authModel.login(check, otpkey);
//         if (Object.values(getUser).length > 0) {
//             const newpassword = await bcrypt.passwordEncryption(password);
//             getUser.password = newpassword;
//             await getUser.save()
//             return R(res, true, `Password changed successfully`, {}, 200)
//         }
//         return R(res, true, `User not found!! Please try again`, {}, 200)


//     } catch (error) {
//         next(error)
//     }
// };





module.exports = auth;



