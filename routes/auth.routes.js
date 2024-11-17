const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const verifyToken = require("../utils/verifyToken");
const { loginValidation, signUpValidation, forgotPasswordValidation, otpSendValidation, otpVerifyValidation } = require("../validation/app/auth.validation");
// const flashService = require("../services/flashMessageService"); 

router.post('/signup', authService.signUp)
router.post('/login',authService.login)
router.get('/user-profile',verifyToken, authService.getUsers)
router.get('/user-change-password',verifyToken, authService.passwordChange)




// router.post('/get-otp',otpSendValidation, authService.getOtpForMobileAndEmail)
// router.post("/verifyOtp",otpVerifyValidation, authService.verifyOtp)



// router.get('/get-flash-message', flashService.getInArray)



// router.post("/change-forgot-password",forgotPasswordValidation,authService.forgotPassword)


module.exports = router 