const router = require('express').Router();


const { register } = require('../controllers/register');
const { validateRequest } = require('../middlewares/validations');
const { validateRegister } = require('../validations/register');


router
    .route('/register')
        .post(
            validateRegister,
            validateRequest,
            register
        );


module.exports = router;