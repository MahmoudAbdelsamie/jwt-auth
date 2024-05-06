const { body } = require('express-validator');
const pool = require('../config/database');


exports.validateLogin = [
    body('email')
        .isEmail()
        .withMessage("Invalid Email!")
        .normalizeEmail(),
    body('password')
        .notEmpty()
        .withMessage('Password Not Provided!')
]