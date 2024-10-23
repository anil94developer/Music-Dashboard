const catchAsync = require("../utils/catchAsync");
const response = require("../utils/response");


const loginController = catchAsync(async (req, res, next) => {
    // Logic for login
    console.log('Login successful');
    return response(200, {}, res);
});

module.exports = loginController;
