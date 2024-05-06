const router = require('express').Router();


const { register } = require('../controllers/register');
const { validateRegister } = require('../validations/register');


router
    .route('/register')
        .post(
            validateRegister,
            register
        );


module.exports = router;