const { body } = require('express-validator');
const pool = require('../config/database');


exports.validateRegister = [
    body('username')
        .isLength({ min: 3 })
        .withMessage('Username Must have at least 3 Characters')
        .trim()
        .escape(),
    body('email')
        .isEmail()
        .withMessage('Email is not Valid')
        .custom( async (value, { req }) => {
            const query = 'SELECT * FROM users WHERE email=$1;';
            const users = await pool.query(query, [value])
            if(users.rowCount > 0) {
                throw new Error('Email Already Exists!');
            }
        })
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8, max: 32 })
        .withMessage('Password Length must be between 8-32')
        .isStrongPassword({
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
            minNumbers: 1
        })
        .withMessage('Password must have at least 1 Lower Character, 1 Upper Character, 1 Number, and 1 Symbol'),
    body('confirmPassword').custom((value, { req }) => {
        if(value !== req.body.password) {
            throw new Error('Passwords Does Not Match!')
        }
})
] 