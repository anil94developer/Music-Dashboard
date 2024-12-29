 
const authModal = require("../models/authmodels");
const validators = require("../utils/validator");
const AppErr = require("../utils/error")
const bcrypt = require("../utils/bcrypt")
const jwt = require("jsonwebtoken");
const R = require("../utils/responseHelper");

dashboard = {} 

dashboard.getDashboard = async(req,res,next) => {
    try {
        let findAdmin = await authModal.findPermission(req.doc.userId)
        let findPermisson = findAdmin.permissions
        let perArr = findPermisson.map(a => {
            return a.value
        })
        const userData = {
            // userId: val["userId"],
            userId: findAdmin._id,
            emailId: findAdmin.email,
            firstName: findAdmin.first_name,
            lastName: findAdmin.last_name,
            permissions: perArr,
            userType: 1,
            role:findAdmin.role
        }
        return R(res,true,"Data Found successfully!!",userData,200)
    } catch (error) {
        next(error)
    } 
}

module.exports = dashboard