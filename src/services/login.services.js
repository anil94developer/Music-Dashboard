const adminLoginModel = require("../models/index");


const getUserByEmail = async (email) => {
    return adminLoginModel.findOne({ email });
};

module.exports = {
    getUserByEmail,
};