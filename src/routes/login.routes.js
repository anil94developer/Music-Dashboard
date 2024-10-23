const express = require('express');
const router = express.Router();

const validatorResponse = require("../utils/joiValidator");
const { loginSchema } = require('../validationSchema/loginValidationSchema');
const { loginController } = require('../controllers/index');

router
    .route('/')
    .post(validatorResponse(loginSchema), loginController);

module.exports = router;
